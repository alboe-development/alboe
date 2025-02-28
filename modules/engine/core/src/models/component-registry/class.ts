import { Component } from '../component';
import { Registry } from '../registry';
import type { ComponentRegistryOptions } from './types';

class ComponentRegistry extends Registry<Component> {
  public components: Record<string, Record<string, Component>>;

  public constructor(options: ComponentRegistryOptions = {}) {
    super(options);

    this.components = {};

    this.set(options);
  }

  public override set(options: ComponentRegistryOptions = {}): this {
    if (options.items) {
      this.components = {};
    }

    super.set(options);

    return this;
  }

  protected override canAttach(component: Component): boolean {
    return super.canAttach(component) &&
      component.isComponent &&
      !(this.components[component.kind] || {})[component.id];
  }

  protected override canDetach(component: Component): boolean {
    return super.canDetach(component) &&
      !!(this.components[component.kind] || {})[component.id];
  }

  protected override mount(component: Component): this {
    super.mount(component);

    this.components[component.kind] = this.components[component.kind] || {};
    this.components[component.kind][component.id] = component;

    return this;
  }

  protected override unmount(component: Component): this {
    delete this.components[component.kind][component.id];

    if (Object.values(this.components[component.kind]).length === 0) {
      delete this.components[component.kind];
    }

    super.unmount(component);

    return this;
  }
}

export { ComponentRegistry };
