import { Item } from '../item';

abstract class Component extends Item {
  public readonly isComponent: boolean = true;

  public abstract readonly kind: string;
}

export { Component };
