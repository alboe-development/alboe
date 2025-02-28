import type { ItemOptions } from './types';

abstract class Item {
  public id: string;

  public readonly isItem: boolean = true;

  public constructor(options: ItemOptions = {}) {
    this.id = globalThis.crypto.randomUUID();

    this.set(options);
  }

  public get serial(): ItemOptions {
    return {
      id: this.id,
    };
  }

  public set(options: ItemOptions): this {
    this.id = options.id ?? this.id;

    return this;
  }
}

export { Item };
