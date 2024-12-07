const { beforeEach, describe, expect, it } = require('@jest/globals');
const { Entry } = require('@alboe/log-utils');

describe('Entry', () => {
  describe('instance', () => {
    let instance;

    beforeEach(() => {
      instance = new Entry();
    });

    describe('dts', () => {
      it('should set the dts to a valid date string when none was provided', () => {
        expect(
          /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i.test(instance.dts)
        ).toBeTruthy();
      });

      it('should be the provided dts when a dts was provided', () => {
        const dts = new Date().toISOString();
        instance = new Entry({ dts });

        expect(instance.dts).toBe(dts);
      });
    });

    describe('id', () => {
      it('should generate a random uuid when none was provided', () => {
        expect(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(instance.id)
        ).toBeTruthy();
      });

      it('should be the provided id when an id was provided', () => {
        const id = 'example-id';
        instance = new Entry({ id });

        expect(instance.id).toBe(id);
      });
    });

    describe('message', () => {
      it('should generate an empty message when none was provided', () => {
        expect(instance.message).toBe('');
      });

      it('should be the provided message when a message was provided', () => {
        const message = 'example-message';
        instance = new Entry({ message });

        expect(instance.message).toBe(message);
      });
    });

    describe('serial', () => {
      it('should generate a default serial if none was provided', () => {
        const { serial } = instance;

        expect(
          /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i.test(serial.dts)
        ).toBeTruthy();

        expect(
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(instance.id)
        ).toBeTruthy();

        expect(instance.message).toBe('');
        expect(instance.severity).toBe(0);
      });

      it('should be the provided serial data when options were provided', () => {
        const serial = {
          dts: new Date().toISOString(),
          id: 'example-id',
          message: 'example-message',
          severity: 123,
        };

        instance = new Entry(serial);

        expect(instance.serial).toMatchObject(serial);
      });
    });

    describe('severity', () => {
      it('should generate a severity of 0 when none was provided', () => {
        expect(instance.severity).toBe(0);
      });

      it('should be the provided severity when a severity was provided', () => {
        const severity = 123;
        instance = new Entry({ severity });

        expect(instance.severity).toBe(severity);
      });
    });

    describe('set()', () => {
      it('should use the provided dts when available', () => {
        const dts = new Date().toISOString();

        instance.set({ dts });

        expect(instance.dts).toBe(dts);
      });

      it('should use the provided id when available', () => {
        const id = 'example-id';

        instance.set({ id });

        expect(instance.id).toBe(id);
      });

      it('should use the provided message when available', () => {
        const message = 'example-message';

        instance.set({ message });

        expect(instance.message).toBe(message);
      });

      it('should use the provided severity when available', () => {
        const severity = 123;

        instance.set({ severity });

        expect(instance.severity).toBe(severity);
      });

      it('should result back to the previous dts when none was provided', () => {
        const initial = new Date().toISOString();
        instance = new Entry({ dts: initial });

        instance.set({ dts: undefined });

        expect(instance.dts).toBe(initial);
      });

      it('should result back to the previous id when none was provided', () => {
        const initial = 'example-id';
        instance = new Entry({ id: initial });

        instance.set({ id: undefined });

        expect(instance.id).toBe(initial);
      });

      it('should result back to the previous message when none was provided', () => {
        const initial = 'example-message';
        instance = new Entry({ message: initial });

        instance.set({ message: undefined });

        expect(instance.message).toBe(initial);
      });

      it('should result back to the previous severity when none was provided', () => {
        const initial = 123;
        instance = new Entry({ severity: initial });

        instance.set({ severity: undefined });

        expect(instance.severity).toBe(initial);
      });

      it('should return itself', () => {
        expect(instance.set()).toBe(instance);
      });
    });
  });
});
