import type { Component } from '../component';
import type { ItemOptions } from '../item';

export interface EntityOptions extends ItemOptions {
  components?: Component[];
}
