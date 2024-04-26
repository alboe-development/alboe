import { Arrays } from '@alboe/common-mutables';
import Entry from '../entry';
import Transport from '../transport';
import type { Options } from './types';

/**
 * The Log class definition.
 *
 * @remarks
 * This class definition acts as the primary manager for all exports within this
 * module.
 *
 * @example
 * Constructed usage.
 * ```ts
 * import { Log } from '@alboe/log-utils';
 * import { yourFilter, yourFormatter, YourTransport } from '@your/module';
 *
 * const log = new Log({
 *   filters: [yourFilter],
 *   formatters: [yourFormatter],
 *   transports: [new YourTransport()],
 * });
 *
 * log.process('message');
 * ```
 *
 * @example
 * Static usage.
 * ```ts
 * import { Log } from '@alboe/log-utils';
 * import { yourFilter, yourFormatter, YourTransport } from '@your/module';
 *
 * const { instance } = Log;
 *
 * instance.mountFilters(yourFilter);
 * instance.mountFormatters(yourFormatter);
 * instance.mountTransports(new YourTransport());
 *
 * instance.process('message');
 *
 * // or, statically
 *
 * Log.process('message');
 * ```
 *
 * @public
 */
class Log extends Transport {
  /**
   * Transport instances associated with this Log instance.
   */
  #transports: Arrays<Transport>;

  /**
   * Construct a new instance of this class definition.
   *
   * @param options - Options to use when constructing the instance.
   */
  public constructor(options: Options = {}) {
    const { transports = [], ...others } = options;

    super(others);

    this.#transports = new Arrays(...transports);
  }

  /**
   * Transport instances associated with this Log instance.
   */
  public get transports(): Array<Transport> {
    return [...this.#transports];
  }

  /**
   * Clear all Transport instances associated with this instance.
   * @returns - This instance.
   */
  public clearTransports(): this {
    this.unmountTransports(...this.#transports);

    return this;
  }

  /**
   * Mount Transport instances to this instance.
   *
   * @param transports - Transport instances to mount.
   * @returns - This instance.
   */
  public mountTransports(...transports: Array<Transport>): this {
    transports.forEach((transport) => this.#transports.append(transport));

    return this;
  }

  /**
   * Set This instance based on the provided Options.
   *
   * @param options - Options to set This instance to.
   * @returns - This instance.
   */
  public override set(options: Options = {}): this {
    const { transports, ...other } = options;

    this.clearTransports();

    super.set(other);

    if (transports) {
      this.mountTransports(...transports);
    }

    return this;
  }

  /**
   * Unmount the provided Transport instances from this instance.
   *
   * @param transports - Transport instances to unmount from this instance.
   * @returns - This instance.
   */
  public unmountTransports(...transports: Array<Transport>): this {
    transports.forEach((transport) => this.#transports.remove(transport));

    return this;
  }

  /**
   * Write or log the provided Entry instance.
   *
   * @param entry - Entry instance to write or log.
   * @returns - This instance.
   */
  protected write(entry: Entry): Promise<this> {
    return Promise.all(this.#transports.map((transport) => transport.process(entry)))
      .then(() => this);
  }

  static #instance?: Log;

  public static get instance(): Log {
    if (!this.#instance) {
      this.#instance = new Log();
    }

    return this.#instance;
  }

  /**
   * Process an Entry instance against this instance.
   *
   * @param entry - Entry instance to process.
   * @returns - A Promise resolving in This instance.
   */
  public static process(entry: Entry): Promise<Log> {
    const { instance } = this;

    return instance.process(entry);
  }
}

export default Log;
