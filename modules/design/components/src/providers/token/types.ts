/**
 * Properties to be utilized within a `<adc-token-provider />` component.
 * 
 * @public
 */
export interface TokenProviderProperties {
  /**
   * Dimension token scope to utilize.
   */
  dimension?: string;

  /**
   * Duration token scope to utilize.
   */
  duration?: string;

  /**
   * Mode token scope to utilize.
   */
  mode?: string;
}
