import { Entry, Transport } from '../../models';

/**
 * The ConsoleTransport class definition.
 *
 * @remarks
 * This Transport class extension is designed to handle sending entry data to
 * the platform console.
 *
 * @example
 * ```ts
 * import { ConsoleTransport, Log } from '@alboe/log-utils';
 *
 * const log = new Log({ transports: [new ConsoleTransport()] });
 *
 * log.process('example'); // writes to console.
 * ```
 *
 * @public
 */
class ConsoleTransport extends Transport {
  /**
   * Write or log the provided Entry instance.
   *
   * @param entry - Entry instance to write or log.
   * @returns - This instance.
   */
  protected write(entry: Entry): Promise<this> {
    // eslint-disable-next-line no-console -- required standard featureset.
    console.log(entry.data);

    return Promise.resolve(this);
  }
}

export default ConsoleTransport;
