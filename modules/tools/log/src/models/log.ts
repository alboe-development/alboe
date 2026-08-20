import type { Transport } from "./transport.ts";
import { Entry, type EntryOptions } from "./entry.ts";

/**
 * Options to be used when constructing or setting a Log instance.
 *
 * @public
 */
interface LogOptions {
  /**
   * Transport instances to use with this Log instance.
   */
  transports?: Transport[];
}

/**
 * Options to use when performing a write action on a Log instance.
 *
 * @public
 */
interface LogWriteOptions {
  /**
   * Entry to write to this Log.
   */
  entry?: Entry;
}

/**
 * A container to be used to transport Entry instances via Transport instances.
 *
 * @public
 */
class Log {
  /**
   * Transports associated with this Log.
   */
  #transports: Transport[];

  /**
   * Construct a new Log.
   */
  public constructor(options: LogOptions = {}) {
    this.#transports = [];

    this.set(options);
  }

  /**
   * Transports associated with this Log.
   */
  public get transports(): Transport[] {
    return [...this.#transports];
  }

  public set transports(transports: Transport[]) {
    this.#transports = [...transports];
  }

  /**
   * Log a new Entry using the provided options.
   */
  public log(options?: EntryOptions): Promise<this> {
    const entry = new Entry(options);

    return this.write({ entry });
  }

  /**
   * Write an Entry to the log using the provided options.
   */
  public write(options: LogWriteOptions = {}): Promise<this> {
    const { entry } = options;

    return Promise.all(this.#transports.map(
      (transport) => transport.process({ entry })),
    ).then(() => this);
  }

  /**
   * Set all constructor values of this Log.
   */
  public set(options: LogOptions = {}): this {
    this.#transports = options.transports ? [...options.transports] : [];

    return this;
  }

  /**
   * The singleton Log instance.
   */
  static #instance: Log;

  /**
   * The singleton Log instance.
   */
  public static get instance(): Log {
    if (!this.#instance) {
      this.#instance = new Log();
    }

    return this.#instance;
  }

  public static set instance(value: Log) {
    this.#instance = value;
  }

  /**
   * Log a new Entry using the provided options.
   */
  public static log(options?: EntryOptions): Promise<Log> {
    return this.instance.log(options);
  }

  /**
   * Write an Entry to the log using the provided options.
   */
  public static write(options?: LogWriteOptions): Promise<Log> {
    return this.instance.write(options);
  }
}

export {
  Log,
  type LogOptions,
  type LogWriteOptions,
};
