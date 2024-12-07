import { Entry, TransportOptions } from '../../models';

/**
 * Function to be used when Templating Entry instances within a ConsoleTransport
 * instance.
 * 
 * @public
 */
export type Template = (entry: Entry) => string;

/**
 * Options to be provided to a ConsoleTransport instance.
 * 
 * @public
 */
export interface Options extends TransportOptions {
  /**
   * Function to be used when Templating Entry instances within this
   * ConsoleTransport instance.
   * 
   * @defaultValue `[${entry.dts}](${entry.severity}) ${entry.message}`
   */
  template?: Template;
}
