import { css } from 'lit';

/**
 * Tokens associated with this component
 * 
 * @public
 */
const tokens = css`
:host {
  --adc-layout-footer-color-background-normal: var(--adt-color-background-layout-normal);
  --adc-layout-footer-color-text-normal: var(--adt-color-text-layout-strongest);
  --adc-layout-footer-dimension-height-large: var(--adt-dimension-size-layout-small);
  --adc-layout-footer-dimension-height-medium: var(--adt-dimension-size-layout-smaller);
  --adc-layout-footer-dimension-height-small: var(--adt-dimension-size-layout-smallest);
}
`;

export { tokens };
