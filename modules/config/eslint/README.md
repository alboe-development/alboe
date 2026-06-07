# Configuration - ESLint

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![availabilty: internal](https://img.shields.io/badge/Availability-Internal-blue?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [ESLint](https://eslint.org/) ruleset to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

Installation of this module and its required dependencies can be performed within this project by updating the module's manifest to include thie following dependencies:

```jsonc
/* ./package.json */
{
  /* ... */
  "devDependencies": {
    /* ... */
    "@alboe/eslint-config": "workspace:*",
    "typescript": "catalog:" /* optional */
  }
}
```

## Usage

This module is expected to be used with [ESLint](https://eslint.org/) and optionally [TypeScript](https://www.typescriptlang.org/).

Create an ESLint configuration file at `./eslint.config.js` within the scope of a module and utilize the following template to produce the configuration:

```js
/* ./eslint.config.js */
import {
  common,
  javascript,
  json,
  markdown,
  typescript, /* optional */
} from "@alboe/eslint-config";

const config = [
  ...common(),
  ...javascript(),
  ...json(),
  ...markdown(),
  ...typescript(), /* optional */
];

export default config;
```

The shared configuration will validate all files that meet each provided rulset's scope. Add the following scripts to the module's manifest file:

```jsonc
/* package.json */
{
  /* ... */
  "scirpts": {
    /* ... */
    "test": "{...} && pnpm test:style",
    "test:style": "eslint",
    /* ... */
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
