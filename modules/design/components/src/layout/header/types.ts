import type { CONSTANTS } from './constants';

/**
 * Size of this component.
 * 
 * @public
 */
export type Size = typeof CONSTANTS.SIZES[keyof typeof CONSTANTS.SIZES];

/**
 * Properties to be utilized within this component.
 * 
 * @public
 */
export interface Properties {
  /**
   * Size of this component.
   */
  size?: Size;
}
