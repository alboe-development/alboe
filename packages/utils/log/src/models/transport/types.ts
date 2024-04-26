import Entry from '../entry';
import Formatter from '../formatter';

/**
 * Filter to be provided to a Transport instance.
 *
 * @public
 */
export type Filter = (entry: Entry) => boolean;

/**
 * Interface used to construct a Transport instance.
 *
 * @public
 */
export interface Options {
  /**
   * Filter instances to use when constructing a Transport instance.
   */
  filters?: Array<Filter>;

  /**
   * Formatter instances to use when constructing a Transport instance.
   */
  formatters?: Array<Formatter>;
}
