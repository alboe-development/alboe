import { ValueOf } from '@alboe/common-types';
import type { CONSTANTS } from './constants';

/**
 * Size of this component.
 * 
 * @public
 */
export type Size = ValueOf<typeof CONSTANTS.SIZES>;

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
