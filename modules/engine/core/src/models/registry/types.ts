import type { Item } from '../item';

export interface RegistryOptions<Shape extends Item = Item> {
  items?: Shape[];
}
