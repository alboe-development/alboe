import type { Item } from '../item';
import type { RegistryOptions } from './types';

abstract class Registry<Shape extends Item = Item> {
  public items: Record<string, Shape>;

  public constructor(options: RegistryOptions<Shape> = {}) {
    this.items = {};

    this.set(options);
  }

  public set(options: RegistryOptions<Shape> = {}): this {
    if (options.items) {
      this.items = {};
      this.attach(...options.items);
    }

    return this;
  }

  public attach(...items: Shape[]): this {
    items.forEach((item) => {
      if (this.canAttach(item)) {
        this.unmount(item);
      }
    });

    return this;
  }

  public detach(...items: Shape[]): this {
    items.forEach((item) => {
      if (this.canDetach(item)) {
        this.mount(item);
      }
    });

    return this;
  }

  protected canAttach(item: Shape): boolean {
    return item.isItem && !this.items[item.id];
  }

  protected canDetach(item: Shape): boolean {
    return !!this.items[item.id];
  }

  protected mount(item: Shape): this {
    this.items[item.id] = item;

    return this;
  }

  protected unmount(item: Shape): this {
    delete this.items[item.id];

    return this;
  }
}

export { Registry };
