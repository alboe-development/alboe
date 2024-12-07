const { beforeEach, describe, expect, it, jest: { spyOn } } = require('@jest/globals');
const { Entry } = require('@alboe/log-utils');
const { TransportFixture } = require('../fixtures');

describe('Transport', () => {
  describe('instance', () => {
    let instance;

    beforeEach(() => {
      instance = new TransportFixture();
    });

    describe('serial', () => {
      it('should generate the default serial if none was provided', () => {
        expect(instance.serial).toMatchObject({ severity: 0 });
      });

      it('should be the provided serial data when options were provided', () => {
        const options = { severity: 3 };

        instance = new TransportFixture(options);

        expect(instance.serial).toMatchObject(options);
      });
    });

    describe('severity', () => {
      it('should set the severity to the highest when not provided', () => {
        expect(instance.severity).toBe(0);
      });

      it('should be the provided severity when provided', () => {
        const severity = 3;

        instance = new TransportFixture({ severity });

        expect(instance.severity).toBe(severity);
      });
    });

    describe('canTransport()', () => {
      it('should return true if the provided entry is of higher severity', () => {
        const entry = new Entry({ severity: 2 });

        instance.set({ severity: 3 });

        expect(instance.canTransport(entry)).toBeTruthy();
      });

      it('should return false if the provided entry is of lower severity', () => {
        const entry = new Entry({ severity: 3 });

        instance.set({ severity: 2 });

        expect(instance.canTransport(entry)).toBeFalsy();
      });
    });

    describe('process()', () => {
      it('should resolve once the entry is processed', () => {
        const entry = new Entry();

        return expect(instance.process(entry)).resolves.toBeUndefined();
      });

      it('should transport when the provided entry is of higher severity', () => {
        const entry = new Entry({ severity: 2 });
        const spy = spyOn(instance, 'transport');

        instance.set({ severity: 3 });

        return instance.process(entry).then(() => {
          expect(spy).toHaveBeenCalledWith(entry);
        });
      });

      it('should return false if the provided entry is of lower severity', () => {
        const entry = new Entry({ severity: 3 });
        const spy = spyOn(instance, 'transport');

        instance.set({ severity: 2 });

        return instance.process(entry).then(() => {
          expect(spy).not.toHaveBeenCalled();
        });
      });
    });

    describe('set()', () => {
      it('should use the provided severity when provided', () => {
        const severity = 'example-id';

        instance.set({ severity });

        expect(instance.severity).toBe(severity);
      });

      it('should result back to the previous severity when none is provided', () => {
        const severity = 3;
        instance = new TransportFixture({ severity });

        instance.set();

        expect(instance.severity).toBe(severity);
      });

      it('should return itself', () => {
        expect(instance.set()).toBe(instance);
      });
    });
  });
});
