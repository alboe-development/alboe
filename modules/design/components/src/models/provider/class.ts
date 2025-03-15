import { type CSSResult } from 'lit';
import { Component } from '../component';
import { styles } from './styles';

/**
 * The core Provider for this project.
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
  public static override styles: CSSResult[] = [styles];
}

export { Provider };
