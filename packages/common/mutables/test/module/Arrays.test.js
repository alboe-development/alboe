const { Arrays } = require('@alboe/common-mutables');

describe('Arrays', () => {
  describe('instance', () => {
    let instance;

    beforeEach(() => {
      instance = new Arrays(1, 2, 3);
    });

    describe('append()', () => {
      it('should append the provided item to the instance', () => {
        const target = 4;

        instance.append(target);

        expect(instance.includes(target)).toBeTruthy();
      });

      it('should append the provided items to the instance', () => {
        const targets = [4, 5];

        instance.append(...targets);

        targets.forEach((target) => {
          expect(instance.includes(target)).toBeTruthy();
        });
      });

      it('should not append items that already exist within the instance', () => {
        const targets = [1, 2, 3];
        const expected = instance.length;

        instance.append(...targets);

        expect(instance).toHaveLength(expected);
      });
    });

    describe('remove()', () => {
      it('should remove the provided item from the instance', () => {
        const target = 2;

        instance.remove(target);

        expect(instance.includes(target)).toBeFalsy();
      });

      it('should remove the provided items from the instance', () => {
        const targets = [2, 3];

        instance.remove(...targets);

        targets.forEach((target) => {
          expect(instance.includes(target)).toBeFalsy();
        });
      });

      it('should not modify the instance if it does not include the item', () => {
        const original = new Arrays(...instance);
        const target = 4;

        instance.remove(target);

        expect(instance).toEqual(original);
      });
    });
  });

  describe('static', () => {
    describe('constructor()', () => {
      let instance;

      beforeEach(() => {
        instance = new Arrays(1, 2, 3);
      });

      it('should extend the Object class', () => {
        expect(instance instanceof Array).toBeTruthy();
      });
    });
  });
});
