import { css } from 'lit';

/**
 * Styles associated with this component.
 * 
 * @public
 */
const styles = css`
:host {
  background-color: var(--adc-layout-footer-color-background);
  color: var(--adc-layout-footer-color-text);
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: var(--adc-layout-footer-dimension-height);
  width: 100%;
}

:host {
  --adc-layout-footer-color-text: var(--adc-layout-footer-color-text-normal);
  --adc-layout-footer-color-background: var(--adc-layout-footer-color-background-normal);
  --adc-layout-footer-dimension-height: var(--adc-layout-footer-dimension-height-medium);
}

:host([size="large"]) {
  --adc-layout-footer-dimension-height: var(--adc-layout-footer-dimension-height-large);
}

:host([size="medium"]) {
  --adc-layout-footer-dimension-height: var(--adc-layout-footer-dimension-height-medium);
}

:host([size="small"]) {
  --adc-layout-footer-dimension-height: var(--adc-layout-footer-dimension-height-small)
}
`;

export { styles };
