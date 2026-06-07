# @alboe/typescript-config

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![availabilty: internal](https://img.shields.io/badge/Availability-Internal-blue?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [TypeScript](https://www.typescriptlang.org/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation


## Installation

Installation of this module and its required dependencies can be performed within this project by updating the module's manifest to include thie following dependencies:

```jsonc
/* ./package.json */
{
  /* ... */
  "devDependencies": {
    /* ... */
    "@alboe/typescript-config": "workspace:*",
    "typescript": "catalog:"
  }
}
```

## Usage

This module is expected to be used with [TypeScript](https://www.typescriptlang.org/).

A TypeScript configuration file must be consumed within the target package using the following configuration definition example:

Create a TypeScript configuration file at `./tsconfig.json` within the scope of a module and extend the shared configuration:

```jsonc
/* ./tsconfig.json */
{
  "extends": "@alboe/typescript-config/static/index.json",
  "include": [
    "./src/**/*.ts" /* Set the files to include when building. */
  ]
}
```

This configuration will target all `./src/**/*.ts` files within the focused project and generate output files within the `./dist/module/**` folder. Add the following scripts to the module's manifest file:

```jsonc
{
  /* ... */
  "scripts": {
    /* ... */
    "build": "{...} && pnpm build:module",
    "build:module": "tsc",
    "test": "{...} && pnpm test:syntax",
    "test:syntax": "tsc --noEmit"
  }
}
```

After these commands are executed, the generated module will be written within the `./dist/module` folder.

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
