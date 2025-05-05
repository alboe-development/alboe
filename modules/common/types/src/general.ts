/**
 * Value of the provided object type.
 * 
 * @public
 */
export type ValueOf<Object> = Object[keyof Object];
