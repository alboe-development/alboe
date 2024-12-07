import { Entry, Transport } from '../../models';
import type { Options, Template } from './types';

/**
 * The ConsoleTransport class definition.
 * 
 * @remarks
 * This Transport class definition is designed as the primary Transport class
 * definition for all console-driven logging within this project.
 * 
 * @public
 */
class ConsoleTransport extends Transport {
  /**
   * Template function to use when mutating a log instance
   */
  private template: Template;

  /**
   * Construct a new ConsoleTransport instance.
   *
   * @param options - Options to use when constructing a new ConsoleTransport.
   */
  public constructor(options: Options = {}) {
    super(options);

    this.template = (entry: Entry) => `[${entry.dts}](${entry.severity}) ${entry.message}`;

    this.set(options);
  }

  protected override transport(entry: Entry): Promise<void> {
    const output = this.template(entry);

    globalThis.console.log(output);

    return Promise.resolve();
  }

  public override set(options: Options = {}): this {
    super.set(options);

    this.template = options.template ?? this.template;

    return this;
  }
}

export { ConsoleTransport };
