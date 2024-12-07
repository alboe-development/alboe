/**
 * Options to be provided to an Entry instance.
 * 
 * @public
 */
export interface Options {
  /**
   * The date to be assigned to an Entry instance as a ISO 8601 string.
   * 
   * @defaultValue new Date().toISOString()
   */
  dts?: string;

  /**
   * The unique identifier to be assigned to an Entry instance.
   * 
   * @defaultValue globalThis.crypto.randomUUID()
   */
  id?: string;

  /**
   * The message to be assigned to an Entry instance.
   */
  message?: string;

  /**
   * The severity to be assigned to an Entry instance.
   * 
   * @remarks
   * This value is assessed in ascending order from most important to least
   * important.
   * 
   * @defaultValue 0
   */
  severity?: number;
}
