import { Entry, Transport } from '../../models';

class Console extends Transport{
  public process(entry: Entry): Promise<void> {
    console.log(entry.data);

    return Promise.resolve();
  }
}

export default Console;
