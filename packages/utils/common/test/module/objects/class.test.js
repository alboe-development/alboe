const { Objects } = require('@alboe/common-utils');

describe('Objects', () => {
  describe('static', () => {
    let fixture;

    beforeEach(() => {
      fixture = {
        a: {
          b: {
            c: 'value',
          },
        },
      };
    });

    it('should freeze all child objects', () => {
      Objects.deepFreeze(fixture);

      expect(Object.isFrozen(fixture)).toBeTruthy();
      expect(Object.isFrozen(fixture.a)).toBeTruthy();
      expect(Object.isFrozen(fixture.a.b)).toBeTruthy();
    });

    it('should return the provided value', () => {
      const results = Objects.deepFreeze(fixture);

      expect(results).toBe(fixture);
    });
  });
});
