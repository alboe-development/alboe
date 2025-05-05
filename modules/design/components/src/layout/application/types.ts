import type { ValueOf } from '@alboe/common-types';
import type { CONSTANTS } from './constants';

/**
 * Margin of this component.
 * 
 * @public
 */
export type Margin =  ValueOf<typeof CONSTANTS.MARGINS>;

/**
 * Padding of this component.
 * 
 * @public
 */
export type Padding = ValueOf<typeof CONSTANTS.PADDINGS>;

/**
 * Radius of this component.
 * 
 * @public
 */
export type Radius = ValueOf<typeof CONSTANTS.RADII>;

/**
 * Properties to be utilized within this component.
 * 
 * @public
 */
export interface Properties {
  /**
   * Margin of this component.
   */
  margin?: Margin;

  /**
   * Padding of this component.
   */
  padding?: Padding;

  /**
   * Radius of this component.
   */
  radius?: Radius;
}
