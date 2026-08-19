import type { Entry } from "./entry.ts";

/**
 * Options to be provided when processing Entry instances within a Transport
 * instance.
 *
 * @public
 */
interface TransportProcessOptions {
  /**
   * Entry to process.
   */
  entry?: Entry;
}

/**
 * An Entry transporter to be utilized within a Log instance to process Entry
 * instances.
 *
 * @public
 */
abstract class Transport {
  /**
   * Process an Entry instance based on the provided options.
   */
  public abstract process(options?: TransportProcessOptions): Promise<this>;
}

export {
  Transport,
  type TransportProcessOptions,
};
