import { css } from 'lit';

/**
 * Tokens associated with this component
 * 
 * @public
 */
const tokens = css`
:host {
  --adc-layout-application-color-background-normal: var(--adt-color-background-layout-normal);
  --adc-layout-application-color-text-normal: var(--adt-color-text-layout-strongest);
  --adc-layout-application-dimension-margin-large: var(--adt-dimension-margin-layout-largest);
  --adc-layout-application-dimension-margin-medium: var(--adt-dimension-margin-layout-larger);
  --adc-layout-application-dimension-margin-small: var(--adt-dimension-margin-layout-medium);
  --adc-layout-application-dimension-padding-large: var(--adt-dimension-padding-layout-largest);
  --adc-layout-application-dimension-padding-medium: var(--adt-dimension-padding-layout-larger);
  --adc-layout-application-dimension-padding-small: var(--adt-dimension-padding-layout-medium);
  --adc-layout-application-dimension-radius-large: var(--adt-dimension-radius-layout-largest);
  --adc-layout-application-dimension-radius-medium: var(--adt-dimension-radius-layout-larger);
  --adc-layout-application-dimension-radius-small: var(--adt-dimension-radius-layout-medium);
}
`;

export { tokens };
