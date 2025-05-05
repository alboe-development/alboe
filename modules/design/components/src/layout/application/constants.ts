const NAMESPACE = 'adc-layout-application';

const MARGINS = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

const PADDINGS = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

const RADII = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

const DEFAULTS = {
  MARGIN: undefined,
  PADDING: undefined,
  RADIUS: undefined,
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
   * Possible margins to be assigned to this component.
   */
  MARGINS,

  /**
   * The namespace associated with this component.
   */
  NAMESPACE,

  /**
   * Possible paddings to be assigned to this component.
   */
  PADDINGS,

  /**
   * Possible radiuses to be assigned to this component.
   */
  RADII,
} as const;

export { CONSTANTS };
