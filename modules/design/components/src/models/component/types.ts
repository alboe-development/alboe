/**
 * Options to be used when registering a Component.
 * 
 * @public
 */
export interface ComponentRegisterOptions {
  /**
   * The Component to use when registering.
   * 
   * @defaultValue this
   */
  component?: CustomElementConstructor;

  /**
   * The namespace to use when registering the Component.
   * 
   * @defaultValue this.prototype.namespace
   */
  namespace?: string;

  /**
   * The registry to use when registering the Component.
   * 
   * @defaultValue globalThis.customElements
   */
  registry?: CustomElementRegistry;
}
