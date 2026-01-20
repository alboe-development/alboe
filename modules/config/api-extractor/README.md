# @alboe/api-extractor-config

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: alpha](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [API Extractor](https://api-extractor.com/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This module is meant to be consumed as a **dev-dependency**, and uses the following **dependencies**:

* `dev-dependencies`
  * `@microsoft/api-extractor`
  * `@microsoft/api-documenter`

Installation of the **dependencies** can be performed updating a module's manifest (`package.json`) to include the following entries:

```jsonc
/* ./package.json */
{
  /* ... */
  "devDependencies": {
    /* ... */
    "@alboe/api-extractor-config": "workspace:*",
    "@microsoft/api-extractor": "catalog:",
    "@microsoft/api-documenter": "catalog:"
    /* ... */
  }
}
```

Afterwards, executing the following command is required in order to update all links within this project:

```bash
pnpm install
```

## Usage

This module is expected to be used with [API Extractor](https://api-extractor.com/).

This module is recommended to be used with [API Documenter](https://www.npmjs.com/package/@microsoft/api-documenter).

An API Extractor configuration file (`./api-extractor.config.json`) must be present within the focused project using the following configuration definition example:

```jsonc
/* ./api-extractor.config.json */
{
  "extends": "@alboe/api-extractor-config",
  "projectFolder": "."
}
```

This configuration will target all `./dist/types/**/*.d.ts` files within the focused project and generate output files within the `./dist/docs/api/metadata/**` folder.

Add the following scripts to the focused project's `./package.json` file to align with the commands within the **ALBOE** organization:

```jsonc
/* ./package.json */
{
  /* ... */
  "scripts": {
    /* ... */
    "build": "{...} && pnpm build:docs",
    "build:docs": "{...} && pnpm build:docs:api",
    "build:docs:api": "pnpm build:docs:api:metadata && pnpm build:docs:api:markdown",
    "build:docs:api:markdown": "api-documenter markdown --input-folder ./dist/docs/api/metadata --output-folder ./dist/docs/api/markdown",
    "build:docs:api:metadata": "api-extractor run --local --verbose"
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
