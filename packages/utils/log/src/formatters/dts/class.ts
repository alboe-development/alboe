import { Entry, Formatter } from '../../models';
import { Options } from './types';

/**
 * The DTS Formatter class definition
 *
 * @remarks
 * This Formatter extension is designed to append an ISO string based on the
 * current time to the beginning of the provided entry. This ISO string is then
 * stored within `entry.meta.dts` if it is not already defined.
 *
 * @example
 * ```ts
 * import { DTSFormatter, Log } from '@alboe/log-utils';
 *
 * const log = new Log({ formatters: [new DTSFormatter({
 *   caps: ['< ', ' >'], // Characters to append to the beginning and end of the entry data.
 * })] });
 *
 * log.process('example'); // writes '< XXXX-XX-XXTXX:XX:XX.XXXZ > example';
 * ```
 *
 * @public
 */
class DTSFormatter extends Formatter {
  /**
   * The characters to be appended to the beginning and end of the logged entry.
   */
  #caps: Array<string>;

  /**
   * Construct a new instance of this class definition.
   *
   * @param options - Options to use when constructing the instance.
   */
  public constructor(options: Options = {}) {
    const { caps = [] } = options;

    super();

    this.#caps = [...caps];
  }

  /**
   * Process an Entry instance against this instance.
   *
   * @param entry - Entry instance to process.
   * @returns - The processed entry instance.
   */
  public process(entry: Entry): Entry {
    const { data, meta } = entry;

    if (!meta.dts) {
      meta.dts = new Date().toISOString();
    }

    const [before, after] = this.#caps;
    const modified = `${before}${meta.dts}${after} ${data}`;

    entry.set({ data: modified, meta });

    return entry;
  }

  /**
   *Set this instance based on the provided Options.
   * @param options - Options to set this instance to.
   * @returns - This instance.
   */
  public set(options: Options = {}): this {
    const { caps } = options;

    if (caps) {
      this.#caps = [...caps];
    }

    return this;
  }
}

export default DTSFormatter;
