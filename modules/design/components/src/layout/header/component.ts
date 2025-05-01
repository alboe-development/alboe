import * as Models from '../../models';
import { CONSTANTS } from './constants';
import { styles } from './styles';
import { tokens } from './tokens';
import type { Properties, Size } from './types';

/**
 * The Layout Header Component.
 *
 * @remarks
 * This component acts as a header within a page's layout.
 *
 * @public
 */
class Component extends Models.Component.Component implements Properties {
  public size?: Size;

  public constructor() {
    super();

    this.size = CONSTANTS.DEFAULTS.SIZE;
  }

  public get namespace() {
    return CONSTANTS.NAMESPACE;
  }

  public static override properties = {
    branded: { reflect: true, type: Boolean },
    size: { reflect: true, type: String },
  };

  public static override styles = [...super.styles, tokens, styles];
}

export { Component };
