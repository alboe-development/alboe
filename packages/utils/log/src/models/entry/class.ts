import type { Possibly, Primative } from '@alboe/common-types';

import type { Options } from './types';

/**
 * The Entry class definition.
 *
 * @remarks
 * This class is used to contain a single log entry.
 *
 * @example
 * ```ts
 * import { Entry } from '@alboe/log-utils';
 * import type { EntryOptions } from '@alboe/log-utils';
 *
 * const options = { data: 'example-data', meta: { key: 'value' }};
 * const entry = new Entry(options);
 * ```
 *
 * @public
 */
class Entry {
  /**
   * Data associated with this instance.
   */
  #data?: string;

  /**
   * Metadata associated with this instance.
   */
  #meta: Record<string, Primative>;

  /**
   * Construct a new instance of this class definition.
   *
   * @param options - Options to use when constructing this instance.
   */
  public constructor(options: Options = {}) {
    this.#meta = {};

    this.set(options);
  }

  /**
   * Data associated with this instance.
   */
  public get data(): Possibly<string> {
    return this.#data;
  }

  /**
   * Metadata associated with this instance.
   */
  public get meta(): Record<string, Primative> {
    return { ...this.#meta };
  }

  /**
   * Serial associated with this instance.
   */
  public get serial(): Options {
    const { data, meta } = this;

    return { data, meta };
  }

  /**
   * Update this instance with the provided options.
   *
   * @param options - Options to use when updating this instance.
   * @returns - This instance.
   */
  public set(options: Options = {}): this {
    const { data, meta } = options;

    if (data) {
      this.#data = data;
    }

    if (meta) {
      this.#meta = { ...meta };
    }

    return this;
  }
}

export default Entry;
