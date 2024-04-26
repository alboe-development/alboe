const { Objects } = require('@alboe/common-mutables');

describe('Arrays', () => {
  describe('static', () => {
    describe('constructor()', () => {
      let instance;

      beforeEach(() => {
        instance = new Objects({ a: { b: { c: 'value' } } });
      });

      it('should extend the Object class', () => {
        expect(instance instanceof Object).toBeTruthy();
      });
    });

    describe('deepFreeze()', () => {
      it('should return the provided instance', () => {
        const object = { a: { b: { c: 'value' } } };
        const results = Objects.deepFreeze(object);

        expect(results).toBe(object);
      });

      it('should deeply freeze the provided Object', () => {
        const object = { a: { b: { c: 'value' } } };
        const original = object.a.b.c;
        const value = 'different';

        Objects.deepFreeze(object);

        object.a.b.c = value;

        expect(object.a.b.c).toBe(original);
      });
    });
  });
});
