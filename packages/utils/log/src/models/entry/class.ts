import * as crypto from 'crypto';

import type { Options } from './types';

/**
 * The Entry class.
 *
 * @public
 */
class Entry {
  /**
   * Data associated with this instance.
   */
  #data?: any;

  /**
   * The DateTime stamp associated with this instance.
   */
  #dts: string;

  /**
   * The unique identifier associated with this instance.
   */
  #id: string;

  /**
   * Construct a new instance.
   *
   * @param options - Options to be assigned to this instance.
   */
  public constructor(options: Options = {}) {
    const { data, dts, id } = options;

    this.#data = data;
    this.#dts = dts || new Date().toISOString();
    this.#id = id || crypto.randomUUID();
  }

  /**
   * Data associated with this instance.
   */
  public get data(): any {
    return this.#data;
  }

  /**
   * DateTime stamp associated with this instance.
   */
  public get dts(): string {
    return this.#dts;
  }

  /**
   * Unique identifier for this instance.
   */
  public get id(): string {
    return this.#id;
  }
}

export default Entry;
