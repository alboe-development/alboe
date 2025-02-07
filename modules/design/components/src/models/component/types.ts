/**
 * Options to be used when registering a Component.
 * 
 * @public
 */
export interface ComponentRegisterOptions {
  /**
   * The Component to use when registering.
   * 
   * @default this
   */
  component?: CustomElementConstructor;

  /**
   * The namespace to use when registering the Component.
   * 
   * @default this.prototype.namespace
   */
  namespace?: string;

  /**
   * The registry to use when registering the Component.
   * 
   * @default globalThis.customElements
   */
  registry?: CustomElementRegistry;
}
