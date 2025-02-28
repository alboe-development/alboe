import { ComponentRegistry } from '../component-registry';
import { Item } from '../item';
import type { EntityOptions } from './types';

class Entity extends Item {
  public components: ComponentRegistry;

  public readonly isEntity: boolean = true;

  public constructor(options: EntityOptions = {}) {
    super(options);

    this.components = new ComponentRegistry();

    this.set(options);
  }

  public override get serial(): EntityOptions {
    return {
      ...super.serial,
      components: Object.values(this.components.items),
    };
  }

  public override set(options: EntityOptions = {}): this {
    super.set(options);

    if (options.components) {
      this.components = new ComponentRegistry({ items: options.components });
    }

    return this;
  }
}

export { Entity };
