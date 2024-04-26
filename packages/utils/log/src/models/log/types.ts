import Transport, { type TransportOptions } from '../transport';

/**
 * Options to use when constructing a new Log instance.
 *
 * @public
 */
export interface Options extends TransportOptions {
  /**
   * Transports to mount.
   */
  transports?: Array<Transport>;
}
