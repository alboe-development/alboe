import Transport from '../transport';

/**
 * Options to use when constructing a new instance.
 *
 * @public
 */
export interface Options {
  /**
   * Transports to assign to the constructed instance.
   */
  transports?: Array<Transport>;
}
