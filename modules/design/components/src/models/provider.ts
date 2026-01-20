import { css, type CSSResult } from '../entrepot';
import { Component } from './component';

const styles = css`
:host {
  display: contents;
}
`;

/**
 * The core Provider definition.
 * 
 * @remarks
 * This class definition is used as the foundation for all provider-driven
 * Component instances throughout this and consuming projects.
 * 
 * @example
 * ```ts
 * import { Provider } from '@alboe/design-components';
 * 
 * class CustomProvider extends Provider {}
 * ```
 * 
 * @public
 */
abstract class Provider extends Component {
  public static override styles: CSSResult[] = [...super.styles, styles];
}

export {
  Provider,
};
