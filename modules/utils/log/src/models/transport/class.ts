import { Entry } from '../entry';
import type { Options } from './types';

/**
 * The Transport abstract class definition.
 * 
 * @remarks
 * This class definition is designed to be used as a shared layer for all
 * required transports within this project.
 * 
 * @example
 * ```ts
 * class CustomTransport extends Transport {
 *   public override transport(entry: Entry): Promise<void> {}
 * }
 * ```
 * 
 * @public
 */
abstract class Transport {
  /**
   * Transport this entry within this Transport instance.
   *
   * @param entry - Entry to be transported.
   */
  protected abstract transport(entry: Entry): Promise<void>;

  /**
   * The maximum severity value to consider when processing an Entry instance
   * within this Transport instance.
   */
  #severity: number;

  /**
   * Construct a new Transport instance.
   *
   * @param options - Options to use when constructing a new Transport instance.
   */
  public constructor(options: Options = {}) {
    this.#severity = 0;

    this.set(options);
  }

  /**
   * The serial for this Transport instance.
   */
  public get serial(): Options {
    return {
      severity: this.severity,
    };
  }

  /**
   * The severity of this Transport instance.
   * 
   * @remarks
   * This value is assessed in ascending order from the most important to least
   * important. Note that if a provided Entry instance exceeds this value, it
   * will not be processed by this Transport instance.
   */
  public get severity(): number {
    return this.#severity;
  }

  /**
   * Validate if an Entry instance can be transported by this Transport
   * instance.
   *
   * @param entry - Entry to validate for transportation.
   * @returns True if the Entry instance can be transported.
   */
  public canTransport(entry: Entry): boolean {
    return this.#severity >= entry.severity;
  }

  /**
   * Process an Entry instance on this Transport instance.
   *
   * @param entry - Entry to process in this Transport instance.
   * @returns Promise that resolves once the transportation process id complete.
   */
  public process(entry: Entry): Promise<void> {
    if (!this.canTransport(entry)) {
      return Promise.resolve();
    }

    return this.transport(entry);
  }

  /**
   * Set all values on this Transport instance using an update algorithm.
   *
   * @param options - Options to use when setting this Transport instance.
   * @returns This Transport instance.
   */
  public set(options: Options = {}): this {
    this.#severity = options.severity ?? this.#severity;

    return this;
  }
}

export { Transport };
