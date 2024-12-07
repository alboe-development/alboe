const { beforeEach, describe, expect, it, jest: { spyOn } } = require('@jest/globals');
const { Log } = require('@alboe/log-utils');
const { TransportFixture } = require('../fixtures');

describe('Log', () => {
  describe('instance', () => {
    let instance;

    beforeEach(() => {
      instance = new Log();
    });

    describe('severity', () => {
      it('should set the default severity when none was provided', () => {
        expect(instance.severity).toBe(0);
      });

      it('should use the provided severity when provided', () => {
        const severity = 123;
        instance = new Log({ severity });

        expect(instance.severity).toBe(severity);
      });
    });

    describe('transports', () => {
      it('should set the default transports when none was provided', () => {
        expect(Array.isArray(instance.transports)).toBeTruthy();
        expect(instance.transports.length).toBe(0);
      });

      it('should set the transports to the provided transports', () => {
        const transports = [new TransportFixture(), new TransportFixture()];
        instance = new Log({ transports });

        expect(instance.transports).toMatchObject(transports);
      });
    });

    describe('mount()', () => {
      it('should mount the provided transports', () => {
        const transports = [new TransportFixture(), new TransportFixture()];

        instance.mount(...transports);

        transports.forEach((transport) => {
          expect(instance.transports.includes(transport)).toBeTruthy();
        });
      });

      it('should not mount non-transport instances', () => {
        const transports = ['example-one', 'example-two'];

        instance.mount(...transports);

        transports.forEach((transport) => {
          expect(instance.transports.includes(transport)).toBeFalsy();
        });
      });

      it('should only mount unique instances of transports', () => {
        const transport = new TransportFixture();
        const transports = [transport, transport];
        const length = instance.transports.length;

        instance.mount(...transports);

        expect(instance.transports.length).toBe(length + 1);
      });

      it('should return itself', () => {
        expect(instance.mount()).toBe(instance);
      });
    });

    describe('set()', () => {
      it('should mount the provided transports when provided with transports', () => {
        const transports = [new TransportFixture(), new TransportFixture()];

        instance.set({ transports });

        expect(instance.transports).toMatchObject(transports);
      });
      it('should use the previously mounted transports when no transports are provided', () => {
        const transports = [new TransportFixture(), new TransportFixture()];
        instance = new Log({ transports });

        instance.set({ transports: undefined });

        expect(instance.transports).toMatchObject(transports);
      });

      it('should set the severity with the provided severity when provided', () => {
        const severity = 123;

        instance.set({ severity });

        expect(instance.severity).toBe(severity);
      });

      it('should use the previously provided severity when no severity is provided', () => {
        const severity = 123;
        instance = new Log({ severity: 123 });

        instance.set({ severity: undefined });

        expect(instance.severity).toBe(severity);
      });

      it('should return itself', () => {
        expect(instance.set()).toBe(instance);
      });
    });

    describe('unmount()', () => {
      it('should unmount the provided transports', () => {
        const transports = [new TransportFixture(), new TransportFixture()];
        instance = new Log({ transports });

        instance.unmount(...transports);

        transports.forEach((transport) => {
          expect(instance.transports.includes(transport)).toBeFalsy();
        });
      });

      it('should not unmount transport instances that are not mounted', () => {
        const transports = [new TransportFixture(), new TransportFixture()];
        const { length } = instance.transports;

        instance.unmount(...transports);

        expect(instance.transports.length).toBe(length);
      });

      it('should return itself', () => {
        expect(instance.unmount()).toBe(instance);
      });
    });

    describe('write()', () => {
      it('should resolve once complete', () => expect(instance.write()).resolves.toBeUndefined());

      it('should attempt to process the provided message on each transport', () => {
        const message = 'example message';
        const spy = spyOn(TransportFixture.prototype, 'process');
        const transports = [new TransportFixture(), new TransportFixture()];

        instance.mount(...transports);
        

        return instance.write(message).then(() => {
          expect(spy).toHaveBeenCalledTimes(transports.length);

          transports.forEach((transport, index) => {
            expect(spy).toHaveBeenNthCalledWith(index + 1, expect.objectContaining({ message }));
          });
        });
      });

      it('should attempt to process the provided severity option on each transport', () => {
        const message = 'example message';
        const options = { severity: 5 };

        const spy = spyOn(TransportFixture.prototype, 'process');
        const transports = [new TransportFixture(), new TransportFixture()];

        instance.mount(...transports);
        

        return instance.write(message, options).then(() => {
          expect(spy).toHaveBeenCalledTimes(transports.length);

          transports.forEach((transport, index) => {
            expect(spy).toHaveBeenNthCalledWith(index + 1, expect.objectContaining({ severity: options.severity }));
          });
        });
      });
    });
  });

  describe('static', () => {
    describe('instance', () => {
      it('should be a Log instance', () => {
        expect(Log.instance instanceof Log).toBeTruthy();
      });
    });

    describe('mount()', () => {
      it('should attempt to mount the provided transports on the static instance', () => {
        const spy = spyOn(Log.instance, 'mount');
        const transports = [new TransportFixture(), new TransportFixture()];

        Log.mount(...transports);

        expect(spy).toHaveBeenCalledWith(...transports);
      });
    });

    describe('unmount()', () => {
      it('should attempt to unmount the provided transports on the static instance', () => {
        const spy = spyOn(Log.instance, 'unmount');
        const transports = [new TransportFixture(), new TransportFixture()];

        Log.mount(...transports);
        Log.unmount(...transports);

        expect(spy).toHaveBeenCalledWith(...transports);
      });
    });

    describe('write()', () => {
      it('should resolve once complete', () => expect(Log.instance.write()).resolves.toBeUndefined());

      it('should attempt to write the provided message on the static instance', () => {
        const spy = spyOn(Log.instance, 'write');
        const message = 'example message';

        return Log.write(message).then(() => {
          expect(spy).toHaveBeenCalledWith(message, expect.anything());
        });
      });

      it('should attempt to write the provided options on the static instance', () => {
        const spy = spyOn(Log.instance, 'write');
        const message = 'example message';
        const options = { severity: 3 };

        return Log.write(message, options).then(() => {
          expect(spy).toHaveBeenCalledWith(expect.anything(), options);
        });
      });
    });
  });
});
