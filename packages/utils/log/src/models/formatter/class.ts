import Entry from '../entry';

/**
 * The abstract Formatter class definition.
 *
 * @remarks
 * This abstract class is used as a foundation for formatters to allow for
 * contextual persistence when moutning a formatting method.
 *
 * @example
 * ```ts
 * import { Formatter } from '@alboe/log-utils';
 *
 * class CustomFormatter extends Formatter {
 *   // fulfill any abstract methods.
 * }
 *
 * export default CustomFormatter;
 * ```
 *
 * @public
 */
abstract class Formatter {
  /**
   * Process an Entry instance against this instance.
   *
   * @param entry - Entry instance to process.
   * @returns - The processed Entry instance.
   */
  public abstract process(entry: Entry): Entry;
}

export default Formatter;
