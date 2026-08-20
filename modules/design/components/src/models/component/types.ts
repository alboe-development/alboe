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
  component?: CustomElementConstructor;

  /**
   * The namespace to use when registering the component.
   *
   * @remarks
   * This value is appended to the `prefix` value.
   *
   * @defaultValue this.prototype.namespace
   */
  namespace?: string;

  /**
   * The prefix to use when registering the component.
   *
   * @remarks
   * This value is prepended to the `namespace` value.
   *
   * @defaultValue COMPONENT_CONSTANTS.prefix
   */
  prefix?: string;

  /**
   * The custom elements registry to register the Component to.
   *
   * @defaultValue globalThis.customElements
   */
  registry?: CustomElementRegistry;
}

export {
  type ComponentRegisterOptions,
};
