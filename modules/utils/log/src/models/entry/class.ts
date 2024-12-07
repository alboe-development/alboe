import type { Options } from './types';

/**
 * The Entry class definition.
 * 
 * @remarks
 * Objects of this shape are used as individual log entries within this module.
 * 
 * @example
 * ```ts
 * const entry = new Entry();
 * ```
 * 
 * @public
 */
class Entry {
  /**
   * The Date object associated with this Entry.
   */
  #dt: Date;

  /**
   * The unique identifier associated with this Entry.
   */
  #id: string;

  /**
   * The message attached to this Entry.
   */
  #message: string;

  /**
   * The severity of this entry.
   * 
   * @remarks
   * This value is assessed in ascending order from most important to least
   * important.
   */
  #severity: number;

  /**
   * Construct a new Entry instance.
   *
   * @param options - Options to use when constructing a new Entry instance.
   */
  public constructor(options: Options = {}) {
    this.#dt = new Date();
    this.#id = globalThis.crypto.randomUUID();
    this.#message = '';
    this.#severity = 0;

    this.set(options);
  }

  /**
   * The ISO 8601 datetime stamp for this Entry instance.
   */
  public get dts(): string {
    return this.#dt.toISOString();
  }

  /**
   * The unique identifier associated with this Entry instance.
   */
  public get id(): string {
    return this.#id;
  }

  /**
   * The message assigned to this Entry instance.
   */
  public get message(): string {
    return this.#message;
  }

  /**
   * The serial for this Entry instance.
   */
  public get serial(): Options {
    return {
      dts: this.dts,
      id: this.id,
      message: this.message,
      severity: this.severity,
    };
  }

  /**
   * The severity of this Entry instance.
   * 
   * @remarks
   * This value is assessed in ascending order from most important to least
   * important.
   */
    public get severity(): number {
      return this.#severity;
    }

  /**
   * Set all values on this Entry instance using an update algorithm.
   *
   * @param options - Options to use when setting this Entry instance.
   * @returns This Entry instance.
   */
  public set(options: Options = {}): this {
    this.#dt = options.dts ? new Date(options.dts) : this.#dt;
    this.#id = options.id ?? this.#id;
    this.#message = options.message ?? this.#message;
    this.#severity = options.severity ?? this.#severity;

    return this;
  }
}

export { Entry };
