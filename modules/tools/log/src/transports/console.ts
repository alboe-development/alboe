import { Transport, type TransportProcessOptions } from "../models/index.ts";

/**
 * The Console Entry transporter.
 *
 * @public
 */
class ConsoleTransport extends Transport {
  public process(options: TransportProcessOptions = {}): Promise<this> {
    const { entry } = options;

    globalThis.console.log(entry?.message);

    return Promise.resolve(this);
  }
}

export { ConsoleTransport };
