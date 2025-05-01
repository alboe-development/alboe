const NAMESPACE = 'adc-layout-header';

const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

const DEFAULTS = {
  SIZE: SIZES.MEDIUM,
} as const;

/**
 * Constants associated with this component.
 * 
 * @public
 */
const CONSTANTS = {
  /**
   * The default values for the properties of this component.
   */
  DEFAULTS,

  /**
   * The namespace associated with this component.
   */
  NAMESPACE,

  /**
   * Possible sizes to be assigned to this component.
   */
  SIZES,
} as const;

export { CONSTANTS };
