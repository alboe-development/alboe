import { Entry } from '../entry';
import { Transport } from '../transport';
import type { Options, WriteOptions } from './types';

/**
 * The Log class definition.
 * 
 * @remarks
 * This class is intended to be used as the primary engine for logging Entry
 * instances to all mounted Transport instances.
 * 
 * @example Instance usage.
 * ```ts
 * class TransportA extends Transport {}
 * class TransportB extends Transport {}
 * 
 * const log = new Log({
 *   severity: 2,
 *   transports: [new TransportA(), new TransportB()],
 * });
 * 
 * log.write('example log', { severity: 1 });
 * ```
 * 
 * @example Static usage.
 * ```ts
 * class TransportA extends Transport {}
 * class TransportB extends Transport {}
 * 
 * Log.set({
 *   severity: 2,
 *   transports: [new TransportA(), new TransportB()],
 * });
 * 
 * Log.write('example log', { severity: 1 });
 * ```
 * 
 * @public
 */
class Log {
  /**
   * Default severity for written logs.
   * 
   * @remarks
   * This value is assessed in ascending order from most important to least
   * important.
   */
  #severity: number;

  /**
   * Transports mounted to this Log instance.
   */
  #transports: Array<Transport>;

  /**
   * Construct a new Log instance.
   * @param options - Options to use when constructing a new Log instance.
   */
  public constructor(options: Options = {}) {
    this.#severity = 0;
    this.#transports = [];

    this.set(options);
  }

  /**
   * Default severity for written logs.
   * 
   * @remarks
   * This value is assessed in ascending order from most important to least
   * important.
   */
  public get severity(): number {
    return this.#severity;
  }

  /**
   * Transports mounted to this Log instance.
   */
  public get transports(): Array<Transport> {
    return [...this.#transports];
  }

  /**
   * Mount the provided Transport instances to this Log instance.
   *
   * @param transports - Transport to mount on this Log instance
   * @returns This Log instance.
   */
  public mount(...transports: Array<Transport>): this {
    transports.forEach((transport) => {
      if (!(transport instanceof Transport)) {
        return;
      }

      if (this.#transports.includes(transport)) {
        return;
      }

      this.#transports.push(transport);
    });

    return this;
  }

  /**
   * Set all values on this Log instance using an update algorithm.
   *
   * @param options - Options to use when setting this Log instance.
   * @returns This Log instance.
   */
  public set(options: Options = {}): this {
    if (options.transports) {
      this.#transports.length = 0;
      this.mount(...options.transports);
    }

    this.#severity = options.severity ?? this.#severity;

    return this;
  }

  /**
   * Unmount the provided Transport instances from this Log instance.
   *
   * @param transports  -Transports to unmount from this Log instance.
   * @returns This Log instance.
   */
  public unmount(...transports: Array<Transport>): this {
    transports.forEach((transport) => {
      const index = this.#transports.indexOf(transport);

      if (index < 0) {
        return;
      }

      this.#transports.splice(index, 1);
    });

    return this;
  }

  /**
   * Write the provided message using the provided options within this Log
   * instance.
   *
   * @param message - Message to write within this Log instance.
   * @param options - Options to use when writing the provided message.
   * @returns Promise that resolves once transportation is complete.
   */
  public write(message?: string, options: WriteOptions = {}): Promise<void> {
    const { severity } = options;
    const entry = new Entry({ message, severity });

    const promises = this.#transports.map(
      (transport) => transport.process(entry),
    );

    return Promise.all(promises).then(() => undefined);
  }

  /**
   * The static singleton instance associated with this class definition.
   */
  static #instance: Log;

  /**
   * The static singleton instance associated with this class definition.
   */
  public static get instance(): Log {
    if (!this.#instance) {
      this.#instance = new Log();
    }

    return this.#instance;
  }

  /**
   * Mount the provided Transport instances to this Log singleton instance.
   *
   * @param transports - Transport to mount on this Log singleton instance
   * @returns This Log singleton instance.
   */
  public static mount(...transports: Array<Transport>) {
    return this.instance.mount(...transports);
  }

  /**
   * Unmount the provided Transport instances from this Log singleton instance.
   *
   * @param transports  -Transports to unmount from this Log singleton instance.
   * @returns This Log instance.
   */
  public static unmount(...transports: Array<Transport>) {
    return this.instance.unmount(...transports);
  }

  /**
   * Write the provided message using the provided options within this Log
   * singleton instance.
   *
   * @param message - Message to write within this Log static instance.
   * @param options - Options to use when writing the provided message.
   * @returns Promise that resolves once transportation is complete.
   */
  public static write(message?: string, options: WriteOptions = {}) {
    return this.instance.write(message, options);
  }
}

export { Log };
