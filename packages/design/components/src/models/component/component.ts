import { LitElement } from 'lit';
import CONSTANTS from './constants';

/**
 * Abstract `Component` class.
 * 
 * @remarks
 * This class will provide a foundation for all other components within this
 * project.
 * 
 * @example
 * ```ts
 * const CustomComponent extends Component {
 *   protected get namespace(): string {
 *     return 'my namespace';
 *   }
 * }
 * ```
 * 
 * @public
 */
abstract class Component extends LitElement {
  /**
   * The registration name for this Component.
   */
  public abstract get name(): string

  /**
   * The registration prefix for this Component.
   */
  public override get prefix(): string {
    return Component.CONSTANTS.PREFIX;
  }

  /**
   * The registration scope for this Component.
   */
  public abstract get scope(): string

  public static get namespace(): string {
    const {name, prefix, scope} = this.prototype;

    return [prefix, scope, name].filter((value) => !!value).join('-');
  }

  /**
   * Register this Component to the custom elements registry.
   * 
   * @remarks
   * This Component will be registered using its instance properties `namespace`
   * and `prefix`.
   *
   * @returns - Void.
   */
  public static register(): void {
    const { namespace } = this;
  
    const current = window.customElements.get(namespace);

    if (current) {
      return;
    }

    window.customElements.define(namespace, this as unknown as CustomElementConstructor);
  }

  /**
   * Constants associated with this Component.
   */
  public static get CONSTANTS(): any {
    return CONSTANTS;
  }
}

export default Component;
