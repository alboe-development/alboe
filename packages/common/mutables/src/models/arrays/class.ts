/**
 * The Arrays class definition.
 *
 * @remarks
 * This class definition acts as an extension and enhancement of the default
 * Array class within Node and Browser platforms.
 *
 * @example
 * ```ts
 * import { Arrays } from '@alboe/common-mutables';
 *
 * const array = new Arrays<number>(1, 2, 3);
 * ```
 *
 * @public
 */
class Arrays<T = any> extends Array<T> {
  /**
   * Append one or more items to this instance.
   *
   * @remarks
   * This will only append the item if it does not exist within this instance.
   *
   * @example
   * ```ts
   * const array = new Arrays<number>(1, 2, 3);
   *
   * array.append(4, 5); // appends the items `4` and `5`.
   * array.append(1, 2, 3); // does not append duplicate items.
   *
   * console.log(array); // output => `[ 1, 2, 3, 4, 5 ]`.
   * ```
   * @param items - Items to append to this instance.
   * @returns - This instance after appending the items.
   */
  public append(...items: Array<T>): this {
    items.forEach((item) => {
      if (this.includes(item)) {
        return;
      }

      this.push(item);
    });

    return this;
  }

  /**
   * Remove one or more items from this instance.
   *
   * @example
   * ```ts
   * const array = new Arrays<number>(1, 2, 3);
   *
   * array.remove(2, 3); // removes items `2` and `3`.
   *
   * console.log(array); // output => `[ 1 ]`.
   * ```
   *
   * @param items - Items to remove from this instance.
   * @returns - This instance after removing the items.
   */
  public remove(...items: Array<T>): this {
    items.forEach((item) => {
      const index = this.indexOf(item);

      if (index < 0) {
        return;
      }

      this.splice(index, 1);
    });

    return this;
  }
}

export default Arrays;
