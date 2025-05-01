import { css } from 'lit';

/**
 * Tokens associated with this component
 * 
 * @public
 */
const tokens = css`
:host {
  --adc-layout-header-color-background-normal: var(--adt-color-background-layout-normal);
  --adc-layout-header-color-text-normal: var(--adt-color-text-layout-strongest);
  --adc-layout-header-dimension-height-large: var(--adt-dimension-size-layout-medium);
  --adc-layout-header-dimension-height-medium: var(--adt-dimension-size-layout-small);
  --adc-layout-header-dimension-height-small: var(--adt-dimension-size-layout-smaller);
}
`;

export { tokens };
