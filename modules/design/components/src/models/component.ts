import { type CSSResult, html, LitElement } from "../entrepot";

/**
 * Options to be used when registering a Component
 *
 * @public
 */
interface ComponentRegisterOptions {
  /**
   * The Component class definition to use when registering.
   *
   * @defaultValue this
   */
  component?: CustomElementConstructor

  /**
   * The namespace to use when registering the component.
   *
   * @remarks
   * This value is appended to the `prefixum` value.
   *
   * @defaultValue this.prototype.namespace
   */
  namespace?: string

  /**
   * The prefixum to use when registering the component.
   *
   * @remarks
   * This value is prepended to the `namespace` value.
   *
   * @defaultValue COMPONENT_CONSTANTS.PREFIXUM
   */
  prefixum?: string

  /**
   * The custom elements registry to register the Component to.
   *
   * @defaultValue globalThis.customElements
   */
  registry?: CustomElementRegistry
}

/**
 * Constants associated with the Component class definition.
 *
 * @public
 */
const COMPONENT_CONSTANTS = {
  /**
   * The default prefixum of components constructed from this class definition.
   */
  PREFIXUM: "ads",
} as const;

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
   * This value is appended to the `this.prefixum` of this class definition.
   */
  public abstract get namespace(): string;

  /**
   * The prefixum of this component.
   *
   * @remarks
   * This value is prepended to the `this.namespace` of this class definition.
   *
   * @defaultValue COMPONENT_CONSTANTS.PREFIXUM
   */
  public get prefixum(): string {
    return COMPONENT_CONSTANTS.PREFIXUM;
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
   * Register a Component definition using the interpreted prefixum and
   * namespace to a registry.
   *
   * @param options - Options to use when registering a component definition.
   */
  public static register(options: ComponentRegisterOptions = {}): void {
    const {
      component = this,
      namespace = this.prototype.namespace,
      prefixum = this.prototype.prefixum,
      registry = globalThis.customElements,
    } = options;

    const qualified = `${prefixum}-${namespace}`;

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
