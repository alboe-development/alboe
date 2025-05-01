import { css } from 'lit';

/**
 * Styles associated with this component.
 * 
 * @public
 */
const styles = css`
:host {
  align-items: center;
  background-color: var(--adc-layout-header-color-background);
  color: var(--adc-layout-header-color-text);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: var(--adc-layout-header-dimension-height);
  width: 100%;
}

:host {
  --adc-layout-header-color-text: var(--adc-layout-header-color-text-normal);
  --adc-layout-header-color-background: var(--adc-layout-header-color-background-normal);
}

:host([size="large"]) {
  --adc-layout-header-dimension-height: var(--adc-layout-header-dimension-height-large);
}

:host([size="medium"]) {
  --adc-layout-header-dimension-height: var(--adc-layout-header-dimension-height-medium);
}

:host([size="small"]) {
  --adc-layout-header-dimension-height: var(--adc-layout-header-dimension-height-small)
}
`;

export { styles };
