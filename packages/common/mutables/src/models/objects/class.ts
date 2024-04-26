/**
 * The Objects class definition.
 *
 * @remarks
 * This class definition acts as an extension and enhancement of the default
 * Object class within Node and Browser platforms.
 *
 * @example
 * ```ts
 * import { Objects } from '@alboe/common-mutables';
 *
 * const object = new Objects({ a: true, b: 2, c: 'three' });
 * ```
 *
 * @public
 */
class Objects extends Object {
  /**
   * Deeply freeze an Object.
   *
   * @example
   * ```ts
   * const object = new Objects({ a: { b: { c: 'value' } } });
   *
   * const results = Objects.deepFreeze(object)
   *
   * object.a.b.c = 'four';
   * console.log(object.a.b.c); // output => `three`.
   * console.log(object === results); // output => `true`.
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
