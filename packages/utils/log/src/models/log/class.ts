import Entry from '../entry';
import Transport from '../transport';

import type { Options } from './types';

/**
 * The Log class.
 *
 * @public
 */
class Log {
  /**
   * Transports associated with this instance.
   */
  #transports: Array<Transport>;

  /**
   * Construct a new instance.
   *
   * @param options - Options to be assigned to this instance.
   */
  public constructor(options: Options = {}) {
    const { transports } = options;

    this.#transports = [];

    this.mount(...(Array.isArray(transports) ? transports : []));
  }

  /**
   * Transports associated with this instance.
   */
  public get transports(): Array<Transport> {
    return [...this.#transports];
  }

  /**
   * Log the provided item or Entry.
   *
   * @param item - Item or Entry to log.
   * @returns - Promise that resolves on success.
   */
  public log(item: any | Entry): Promise<any> {
    const entry = item instanceof Entry ? item : new Entry({ data: item });
    const processes = this.#transports.map((transport) => transport.process(entry));

    return Promise.all(processes);
  }

  /**
   * Mount the provided Transport instances to this instance.
   *
   * @param transports - Transport instances to mount.
   * @returns - This instance.
   */
  public mount(...transports: Array<Transport>): this {
    transports.forEach((transport) => {
      if (transport instanceof Transport === false) {
        return;
      }

      if (this.transports.includes(transport)) {
        return;
      }

      this.#transports.push(transport);
    });

    return this;
  }

  /**
   * Unmount the provided Transport instances from this instance.
   *
   * @param transports - Transport instances to unmount.
   * @returns - This instance.
   */
  public unmount(...transports: Array<Transport>): this {
    transports.forEach((transport) => {
      if (!this.transports.includes(transport)) {
        return;
      }

      this.#transports.splice(transports.indexOf(transport), 1);
    });

    return this;
  }

  /**
   * Log instance associated with this class definition.
   */
  static #instance: Log;

  /**
   * Log instance associated with this class definition.
   *
   * @remarks
   * This getter creates a new instance if one does not exist.
   */
  static get instance(): Log {
    if (!this.#instance) {
      this.#instance = new this();
    }

    return this.#instance;
  }

  /**
   * Log the provided item or Entry.
   *
   * @param item - Item or Entry to log.
   * @returns - Promise that resolves on success.
   */
  public static log(item: any | Entry): ReturnType<Log['log']> {
    const { instance } = this;

    return instance.log(item);
  }

  /**
   * Mount the provided Transport instances to the singleton instance.
   *
   * @param transports - Transport instances to mount.
   * @returns - The singleton instance.
   */
  public static mount(...transports: Array<Transport>): ReturnType<Log['mount']> {
    const { instance } = this;

    return instance.mount(...transports);
  }

  /**
   * Unmount the provided Transport instances from the singleton instance.
   *
   * @param transports - Transport instances to unmount.
   * @returns - The singleton instance.
   */
  public static unmount(...transports: Array<Transport>): ReturnType<Log['unmount']> {
    const { instance } = this;

    return instance.unmount(...transports);
  }
}

export default Log;
