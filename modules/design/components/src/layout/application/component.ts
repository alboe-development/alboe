import * as Models from '../../models';
import { CONSTANTS } from './constants';
import { styles } from './styles';
import { tokens } from './tokens';
import type { Margin, Padding, Properties, Radius } from './types';

/**
 * The Layout Footer Component.
 *
 * @remarks
 * This component acts as a footer within a page's layout.
 *
 * @public
 */
class Component extends Models.Component.Component implements Properties {
  public margin?: Margin;

  public padding?: Padding;

  public radius?: Radius;

  public constructor() {
    super();

    this.margin = CONSTANTS.DEFAULTS.MARGIN;
    this.padding = CONSTANTS.DEFAULTS.PADDING;
    this.radius = CONSTANTS.DEFAULTS.RADIUS;
  }

  public get namespace() {
    return CONSTANTS.NAMESPACE;
  }

  public static override properties = {
    ...super.properties,
    margin: { reflect: true, type: String },
    padding: { reflect: true, type: String },
    radius: { reflect: true, type: String },
  };

  public static override styles = [...super.styles, tokens, styles];
}

export { Component };
