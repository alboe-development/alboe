import { type CSSResult, html, LitElement } from "../../vendor/index.ts";
import { COMPONENT_CONSTANTS } from "./constants.ts";
import { type ComponentRegisterOptions } from "./types.ts";

/**
 * The core Component class definition.
 *
 * @remarks
 * This class definition is used as the foundation for all Component instances
 * (web components) throughout this and consuming projects.
 *
 * @example
 * ```ts
 * import { Component } from '@alboe/design-components';
 *
 * class CustomComponent extends Component {}
 * ```
 *
 * @public
 */
abstract class Component extends LitElement {
  /**
   * The namespace of this component.
   *
   * @remarks
   * This value is appended to the `this.prefix` of this class definition.
   */
  public abstract get namespace(): string;

  /**
   * The prefix of this component.
   *
   * @remarks
   * This value is prepended to the `this.namespace` of this class definition.
   *
   * @defaultValue COMPONENT_CONSTANTS.prefix
   */
  public get prefix(): string {
    return COMPONENT_CONSTANTS.DEFAULTS.PREFIX;
  }

  /**
   * An array of CSS Stylesheets to assign to the template of this Component.
   *
   * @remarks
   * When appending additional styles, they must use the `css` template literal
   * provided by this module. Additionally, they should always consider
   * spreading in the `super.styles` value when extending the styles of an
   * upstream Component definition.
   */
  public static override styles: CSSResult[] = [];

  /**
   * Register a Component definition using the interpreted prefix and
   * namespace to a registry.
   *
   * @param options - Options to use when registering a component definition.
   */
  public static register(options: ComponentRegisterOptions = {}): void {
    const {
      component = this,
      namespace = this.prototype.namespace,
      prefix = this.prototype.prefix,
      registry = globalThis.customElements,
    } = options;

    const qualified = `${prefix}-${namespace}`;

    if (registry.get(qualified)) {
      return;
    }

    registry.define(qualified, component as CustomElementConstructor);
  }

  /**
   * Method called to construct this Component instance's template string.
   *
   * @remarks
   * When building a template, the usage of the `html` template literally
   * provided by this module is recommended. By default, this will compose an
   * empty slot.
   */
  public override render() {
    return html`<slot></slot>`;
  }
}

export {
  Component,
  COMPONENT_CONSTANTS,
  type ComponentRegisterOptions,
};
