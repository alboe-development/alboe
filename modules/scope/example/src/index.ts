/**
 * The `@alboe/log-utils` package
 *
 * @remarks
 * This package is used as a collection of utilities for logging data to various
 * transports.
 *
 * @packageDocumentation
 */
export class Example {
  public value: string;

  public constructor(value: string) {
    this.value = value;
  }

  public log(): void {
    console.log(this.value);
  }
}
