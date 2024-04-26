import { Arrays } from '@alboe/common-mutables';

import Formatter from '../formatter';

import type { Filter, Options } from './types';
import Entry from '../entry';

/**
 * The Transport abstract class definition.
 *
 * @remarks
 * This class definition acts as a foundation for all transports within this
 * module.
 *
 * @example
 * ```ts
 * import { Transport } from '@alboe/log-utils';
 *
 * class CustomTransport extends Transport {
 *   // fulfill any abstract methods.
 * }
 *
 * export default CustomTransport;
 * ```
 *
 * @public
 */
abstract class Transport {
  /**
   * Filter functions to be used when attempting to process an Entry instance
   * within this instance.
   */
  #filters: Arrays<Filter>;

  /**
   * Formatter functions to be applied when processing an Entry instance within
   * this instance.
   */
  #formatters: Arrays<Formatter>;

  /**
   * Write or log the provided Entry instance.
   *
   * @param entry - Entry instance to write or log.
   * @returns - This instance.
   */
  protected abstract write(entry: Entry): Promise<this>;

  /**
   * Construct a new instance of this class definition.
   *
   * @param options - Options to use when constructing the instance.
   */
  public constructor(options: Options = {}) {
    const { filters = [], formatters = [] } = options;

    this.#filters = new Arrays(...filters);
    this.#formatters = new Arrays(...formatters);
  }

  /**
   * Filter functions to be used when attempting to process an Entry instance
   * within this instance.
   */
  public get filters(): Array<Filter> {
    return [...this.#filters];
  }

  /**
   * Formatter functions to be applied when processing an Entry instance within
   * this instance.
   */
  public get formatters(): Array<Formatter> {
    return [...this.#formatters];
  }

  /**
   * Clear all Filter functions associated with this instance.
   *
   * @returns - This instance.
   */
  public clearFilters(): this {
    this.unmountFilters(...this.#filters);

    return this;
  }

  /**
   * Clear all Formatter functions associated with this instance.
   *
   * @returns - This instance.
   */
  public clearFormatters(): this {
    this.unmountFormatters(...this.#formatters);

    return this;
  }

  /**
   * Filter the provided Entry instance instance against the Filter functions of
   * This instance and determine whether or not it can be processed.
   *
   * @param entry - Entry instance instance to filter.
   * @returns - `true` if the Entry instance instance can be processed.
   */
  private filter(entry: Entry): boolean {
    return this.#filters.every((filter) => filter(entry));
  }

  /**
   * Format the provided Entry instance instance against the Formatter functions
   * of This instance and return the formatted Entry instance instance.
   *
   * @param entry - Entry instance instance to format.
   * @returns - The formatted Entry instance instance.
   */
  private format(entry: Entry): Entry {
    return this.#formatters.reduce((processed, formatter) => formatter.process(processed), entry);
  }

  /**
   * Mount Filter functions to This instance.
   *
   * @param filters - Filter functions to mount.
   * @returns - This instance.
   */
  public mountFilters(...filters: Array<Filter>): this {
    filters.forEach((filter) => this.#filters.append(filter));

    return this;
  }

  /**
   * Mount Formatter functions to this instance.
   *
   * @param formatters - Formatter functions to mount.
   * @returns - This instance.
   */
  public mountFormatters(...formatters: Array<Formatter>): this {
    formatters.forEach((formatter) => this.#formatters.append(formatter));

    return this;
  }

  /**
   * Process an Entry instance against this instance.
   *
   * @param entry - Entry instance to process.
   * @returns - A Promise resolving in This instance.
   */
  public process(data: Entry | string): Promise<this> {
    const entry = data instanceof Entry ? new Entry(data.serial) : new Entry({ data });

    if (!this.filter(entry)) {
      return Promise.resolve(this);
    }

    return this.write(this.format(entry));
  }

  /**
   * Set this instance based on the provided Options.
   *
   * @param options - Options to set This instance to.
   * @returns - This instance.
   */
  public set(options: Options = {}): this {
    const { filters, formatters } = options;

    this.clearFilters();
    this.clearFormatters();

    if (filters) {
      this.mountFilters(...filters);
    }

    if (formatters) {
      this.mountFormatters(...formatters);
    }

    return this;
  }

  /**
   * Unmount the provided Filter functions from this instance.
   *
   * @param filters - Filter functions to unmount from this instance.
   * @returns - This instance.
   */
  public unmountFilters(...filters: Array<Filter>): this {
    filters.forEach((filter) => this.#filters.remove(filter));

    return this;
  }

  /**
   * Unmount the provided Formatter functions from this instance.
   *
   * @param formatters - Formatter functions to unmount from this instance.
   * @returns - This instance.
   */
  public unmountFormatters(...formatters: Array<Formatter>): this {
    formatters.forEach((formatter) => this.#formatters.remove(formatter));

    return this;
  }
}

export default Transport;
