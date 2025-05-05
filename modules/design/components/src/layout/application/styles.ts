import { css } from 'lit';

/**
 * Styles associated with this component.
 * 
 * @public
 */
const styles = css`
:host {
  background-color: var(--adc-layout-application-color-background);
  border-radius: var(--adc-layout-application-dimension-radius);
  color: var(--adc-layout-application-color-text);
  display: block;
  height: calc(
    100%
    - (var(--adc-layout-application-dimension-margin) * 2)
    - (var(--adc-layout-application-dimension-padding) * 2)
  );
  margin: var(--adc-layout-application-dimension-margin);
  padding: var(--adc-layout-application-dimension-padding);
  width: calc(
    100%
    - (var(--adc-layout-application-dimension-margin) * 2)
    - (var(--adc-layout-application-dimension-padding) * 2)
  );
}

:host {
  --adc-layout-application-color-text: var(--adc-layout-application-color-text-normal);
  --adc-layout-application-color-background: var(--adc-layout-application-color-background-normal);
  --adc-layout-application-dimension-margin: 0px;
  --adc-layout-application-dimension-padding: 0px;
  --adc-layout-application-dimension-radius: 0px;
}

:host([margin="large"]) {
  --adc-layout-application-dimension-margin: var(--adc-layout-application-dimension-margin-large);
}

:host([margin="medium"]) {
  --adc-layout-application-dimension-margin: var(--adc-layout-application-dimension-margin-medium);
}

:host([margin="small"]) {
  --adc-layout-application-dimension-margin: var(--adc-layout-application-dimension-margin-small);
}

:host([padding="large"]) {
  --adc-layout-application-dimension-padding: var(--adc-layout-application-dimension-padding-large);
}

:host([padding="medium"]) {
  --adc-layout-application-dimension-padding: var(--adc-layout-application-dimension-padding-medium);
}

:host([padding="small"]) {
  --adc-layout-application-dimension-padding: var(--adc-layout-application-dimension-padding-small);
}

:host([radius="large"]) {
  --adc-layout-application-dimension-radius: var(--adc-layout-application-dimension-radius-large);
}

:host([radius="medium"]) {
  --adc-layout-application-dimension-radius: var(--adc-layout-application-dimension-radius-medium);
}

:host([radius="small"]) {
  --adc-layout-application-dimension-radius: var(--adc-layout-application-dimension-radius-small);
}
`;

export { styles };
