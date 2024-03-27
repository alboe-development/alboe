import Entry from '../entry';

/**
 * The Transport abstract class.
 *
 * @public
 */
abstract class Transport {
  /**
   * Process the provided Entry instance.
   *
   * @param entries - Entry instances to be processed.
   */
  public abstract process(entry: Entry): Promise<void>;
}

export default Transport;
