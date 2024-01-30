import Entry from '../entry';
import Transport from '../transport';

import type { Options } from './types';

class Log {
  #transports: Array<Transport>;

  public constructor(options: Options = {}) {
    const { transports } = options;

    this.#transports = Array.isArray(transports) ? [...transports] : [];
  }

  public get transports(): Array<Transport> {
    return [...this.#transports];
  }

  public log(data: string): Promise<Array<void>> {
    const entry = new Entry(data);
    const processes = this.#transports.map((transport) => transport.process(entry));

    return Promise.all(processes);
  }
}

export default Log;