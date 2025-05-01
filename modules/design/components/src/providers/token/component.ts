import * as Models from '../../models';
import { CONSTANTS } from './constants';
import { styles } from './styles';
import type { Properties } from './types';

/**
 * The Provider Token Component.
 * 
 * @remarks
 * This component acts as a simple translation layer from DOM-specified
 * attributes to all nested components.
 * 
 * @public
 */
class Component extends Models.Component.Component implements Properties {
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
}

export { Component };
