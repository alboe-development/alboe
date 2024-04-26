/**
 * The `@alboe/common-types` package.
 *
 * @remarks
 * This package is used as a collection of common types to be consumed
 * throughout this project.
 *
 * @packageDocumentation
 */

/**
 * The Possibly Type.
 *
 * @remarks
 * Refers to a Type that can also be a nullish value.
 *
 * @example
 * ```ts
 * import type { Possibly } from '@alboe/common-types';
 *
 * const value: Possibly<string> = null;
 * ```
 *
 * @public
 */
export type Possibly<T> = T | undefined;

/**
 * The Primative Type.
 *
 * @remarks
 * Refers to a non-mutable, non-nullish value.
 *
 * @example
 * ```ts
 * import type { Primative } from '@alboe/common-types';
 *
 * const value: Primative = 'hello world';
 * ```
 *
 * @public
 */
export type Primative = boolean | string | number;
