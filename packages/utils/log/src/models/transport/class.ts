import Entry from '../entry';

abstract class Transport {
  public abstract process(entry: Entry): Promise<void>
}

export default Transport;
