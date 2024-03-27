import { Entry, Transport } from '../../models';

/**
 * The Console Transport class.
 *
 * @public
 */
class Console extends Transport {
  // eslint-disable-next-line class-methods-use-this
  public process(entry: Entry): Promise<void> {
    // eslint-disable-next-line no-console
    console.log(entry.data);

    return Promise.resolve();
  }
}

export default Console;
