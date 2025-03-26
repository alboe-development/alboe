import { Component } from '../../models';
import { CONSTANTS } from './constants';
import { styles } from './styles';
import type { TokenProviderProperties } from './types';

/**
 * The Token Provider Component.
 * 
 * @remarks
 * this component acts as a simple translation layer from DOM-specified
 * attributes to all nested components.
 * 
 * @public
 */
class TokenProvider extends Component implements TokenProviderProperties {
  public dimension?: string;

  public duration?: string;

  public mode?: string;

  public get namespace() {
    return CONSTANTS.NAMESPACE;
  }

  public static override properties = {
    dimension: { attribute: 'adt-dimension', reflect: true, type: String },
    duration: { attribute: 'adt-duration', reflect: true, type: String },
    mode: { attribute: 'adt-mode', reflect: true, type: String },
  };

  public static override styles = [...super.styles, styles];

  /**
   * Constants associated with this TokenProvider Component.
   */
  public static get CONSTANTS() {
    return CONSTANTS;
  }
}

export { TokenProvider };
