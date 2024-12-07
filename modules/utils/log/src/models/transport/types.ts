/**
 * Options to be provided to a Transport instance.
 * 
 * @public
 */
export interface Options {
  /**
   * The maximum severity to be transported by this Transport instance.
   * 
   * @remarks
   * This value is assessed in ascending order from most important to least
   * important.
   * 
   * @defaultValue 0
   */
  severity?: number;
}
