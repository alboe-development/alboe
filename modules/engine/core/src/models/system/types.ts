import type { ValuesOf } from '../../types';
import type { Component } from '../component';
import type { ItemOptions } from '../item';
import type { CONSTANTS } from './constants';

export type SystemState = ValuesOf<typeof CONSTANTS.STATES>;

export interface SystemOptions extends ItemOptions {
  components?: Component[];
}
