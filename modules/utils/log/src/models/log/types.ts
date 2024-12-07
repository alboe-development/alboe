import { Transport } from '../transport';

/**
 * Options to be provided to a Log instance.
 * 
 * @public
 */
export interface Options {
  /**
   * The default severity to use when writing Entry instances with this Log
   * instance.
   * 
   * @defaultValue 0
   */
  severity?: number;

  /**
   * Transports to mount to this Log instance.
   */
  transports?: Array<Transport>;
}

/**
 * Options to use when writting an Entry instance using this Log instance.
 * 
 * @public
 */
export interface WriteOptions {
  /**
   * The default severity to use when writing the provided Entry instance with
   * this Log instance.
   */
  severity?: number;
}
