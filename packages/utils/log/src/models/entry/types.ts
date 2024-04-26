import type { Primative } from '@alboe/common-types';

/**
 * Options used to construct a new instance.
 *
 * @public
 */
export interface Options {
  /**
   * Data associated with this instance.
   */
  data?: string;

  /**
   * Metadata associated with this instance.
   */
  meta?: Record<string, Primative>;
}
