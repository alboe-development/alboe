import * as crypto from 'crypto';

class Entry {
  #data: string;
  #dts: string;
  #id: string;

  public constructor(data: string) {
    this.#data = data;
    this.#dts = new Date().toISOString();
    this.#id = crypto.randomUUID();
  }

  public get data(): string {
    return this.#data;
  }

  public get dts(): string {
    return this.#dts;
  }

  public get id(): string {
    return this.#id;
  }
}

export default Entry;
