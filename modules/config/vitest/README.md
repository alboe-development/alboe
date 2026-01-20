# Configuration - Vitest

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [Vitest](https://vitest.dev/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This module is meant to be consumed as a **dev-dependency**, and requires the following **dependencies**:

* `dev-dependencies`
  * `vitest`
  * `@vitest/coverage-v8`

Installation of the **dependencies** can be performed updating a module's manifest (`package.json`) to include the following entries:

```jsonc
/* ./package.json */
{
  /* ... */
  "devDependencies": {
    /* ... */
    "@alboe/vitest-config": "workspace:*",
    "@vitest/coverage-v8": "catalog:",
    "vitest": "catalog:"
    /* ... */
  }
}
```

Afterwards, executing the following command is required in order to update all links within this project:

```bash
pnpm install
```

## Usage

This module is expected to be used with [Vitest](https://vitest.dev/).

A Vitest configuration file (`./vitest.config.js`) must be present within the focused module using the following configuration definition example:

```js
/* ./vitest.config.js */
import { defineConfig } from 'vitest/config';
import { common } from '@alboe/vitest-config';
import manifest from './package.json' with { type: 'json' };

const config = defineConfig(common({ manifest }));

export default config;
```

This configuration will provide a ruleset generator for both development and production testing environments.

Add the following scripts to the focused project's manifest file (`./package.json`) to align with the commands within the **ALBOE** organization:

```jsonc
/* package.json */
{
  /* ... */
  "scripts": {
    /* ... */
    "test": "{...} && pnpm test:module",
    "test:module": "{...} && pnpm test:module:dist && pnpm test:module:coverage",
    "test:module:dist": "ENTRY=\"./dist/module\" vitest run ./test/module --coverage",
    "test:module:src": "ENTRY=\"./src\" vitest ./test/module",
    /* ... */
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
