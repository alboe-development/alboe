import { type CSSResult, html, LitElement } from 'lit';
import type { RegisterOptions } from './types';

/**
 * The core Component for this project.
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
   * The namespace to use when registering this component to the custom
   */
  public abstract get namespace(): string;
  
  public static override styles: CSSResult[] = [];

  /**
   * Register a component.
   *
   * @param options - Options to use.
   * @returns - Void.
   */
  public static register(options: RegisterOptions = {}): void {
    const {
      component = this,
      namespace = this.prototype.namespace,
      registry = globalThis.customElements,
    } = options;

    if (registry.get(namespace)) {
      return;
    }

    registry.define(namespace, component as unknown as CustomElementConstructor);
  }

  public override render() {
    return html`<slot></slot>`;
  }
}

export { Component };
