const { beforeEach, describe, expect, it, jest: { spyOn, fn } } = require('@jest/globals');
const { Entry, ConsoleTransport, Transport } = require('@alboe/log-utils');

describe('ConsoleTransport', () => {
  describe('instance', () => {
    let instance;

    beforeEach(() => {
      instance = new ConsoleTransport();
    });

    it('should extend Transport', () => {
      expect(instance instanceof Transport).toBeTruthy();
    });

    describe('template', () => {
      it('should use the default template', () => {
        const entry = new Entry({ message: 'example message' });
        const expected = `[${entry.dts}](${entry.severity}) ${entry.message}`;

        expect(instance.template(entry)).toBe(expected);
      });
    });

    describe('transport()', () => {
      it('should attempt to apply the template to the provided entry', () => {
        const entry = new Entry();
        const expected = 'expected output';
        const template = fn().mockReturnValue(expected);

        instance = new ConsoleTransport({ template });

        return instance.transport(entry).then(() => {
          expect(template).toHaveBeenCalledTimes(1);
        });
      });

      it('should attempt to apply the log the provided entry to the console', () => {
        const message = 'example message';
        const entry = new Entry({ message });
        const template = (e) => e.message;
        const spy = spyOn(globalThis.console, 'log');

        instance = new ConsoleTransport({ template });

        return instance.transport(entry).then(() => {
          expect(spy).toHaveBeenCalledWith(entry.message);
        });
      });
    });

    describe('set()', () => {
      it('should call super set', () => {
        const spy = spyOn(Transport.prototype, 'set');
        const options = { severity: 3 };

        instance.set(options);

        expect(spy).toHaveBeenCalledWith(options);
      });

      it('should set the template to the provided template', () => {
        const template = (e) => e.message;
        instance.set({ template });

        expect(instance.template).toBe(template);
      });

      it('should use the previously defined template when none is provided', () => {
        const template = (e) => e.message;
        instance = new ConsoleTransport({ template });

        instance.set({ template: undefined });

        expect(instance.template).toBe(template);
      });

      it('should return itself', () => {
        expect(instance.set()).toBe(instance);
      });
    });
  });
});
