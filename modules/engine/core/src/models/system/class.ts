import { Component } from '../component';
import { ComponentRegistry } from '../component-registry';
import { Item } from '../item';
import { Timer } from '../timer';
import { CONSTANTS } from './constants';
import { SystemOptions, SystemState } from './types';

abstract class System extends Item {
  public components: ComponentRegistry;

  public state: SystemState;

  private timer: Timer;

  public readonly isSystem: boolean = true;

  public abstract onTick(delta: number): void;

  public abstract handles(component: Component): boolean;

  public constructor(options: SystemOptions = {}) {
    super(options);

    this.components = new ComponentRegistry();
    this.state = CONSTANTS.STATES.DISABLED;
    this.timer = new Timer();

    this.set(options);
  }

  public override get serial(): SystemOptions {
    return {
      ...super.serial,
      components: Object.values(this.components.items),
    };
  }

  public disable(): this {
    this.state = CONSTANTS.STATES.DISABLED;
    
    return this;
  }

  public enable(): this {
    this.state = CONSTANTS.STATES.ENABLED;
    
    this.timer.reset();
    
    return this;
  }
  
  public override set(options: SystemOptions = {}): this {
    super.set(options);
    
    if (options.components) {
      this.components = new ComponentRegistry({ items: options.components });
    }
    
    return this;
  }
  
  public tick(): this {
    const { delta } = this.timer;
    
    if (this.state === CONSTANTS.STATES.DISABLED) {
      return this;
    }
    
    this.onTick(delta);
    
    return this;
  }
}

export { System };
