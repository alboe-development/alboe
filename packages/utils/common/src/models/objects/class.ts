/**
 * The Objects class.
 *
 * @remarks
 * This class is used as an enhancement to the existing Object class, by
 * providing additional Object-based methods.
 *
 * @public
 */
class Objects extends Object {
  /**
   * Deeply freeze an Object.
   *
   * @example
   * ```ts
   * const { Objects } = require('@alboe/common-utils');
   *
   * const obj = { a: { b: { c: 'value' }}};
   *
   * const results = Objects.deepFreeze(obj);
   *
   * results.a.b.c = 'updated'; // Throws
   * obj.a.b.c = 'updated'; // Throws
   * ```
   *
   * @param object - Object to deeply freeze.
   * @returns - The provided Object after deeply freezing.
   */
  public static deepFreeze<Shape = Object>(object: Shape): Shape {
    if (object instanceof Object === false) {
      return object;
    }

    this.values(object as Object).forEach((child) => {
      this.deepFreeze(child);
    });

    this.freeze(object);

    return object;
  }
}

export default Objects;
