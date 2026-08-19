/**
 * Options to be used when constructing or setting an Entry instance.
 *
 * @public
 */
interface EntryOptions {
  /**
   * The data to be stored on an Entry instance.
   */
  message?: string;
}

/**
 * A Log entry to be processed by Transport instances attached to a Log
 * instance.
 *
 * @public
 */
class Entry {
  /**
   * Message associated with this Entry.
   */
  #message?: string;

  /**
   * Construct a new Entry.
   */
  public constructor(options: EntryOptions = {}) {
    this.set(options);
  }

  /**
   * Message associated with this Entry.
   */
  public get message(): string | undefined {
    return this.#message;
  }

  public set message(value: string) {
    this.#message = value;
  }

  /**
   * Set all constructor values of this Entry.
   *
   * @returns This Entry.
   */
  public set(options: EntryOptions = {}): this {
    this.#message = options.message;

    return this;
  }
}

export {
  Entry,
  type EntryOptions,
};
