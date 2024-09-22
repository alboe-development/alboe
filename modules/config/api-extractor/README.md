# @alboe/api-extractor-config

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [API Extractor](https://api-extractor.com/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This module is meant to be consumed as a **dev-dependency**, and uses the following **dependencies**:

* `dev-dependencies`
  * `@microsoft/api-extractor`
  * `@microsoft/api-documenter` _recommended_

Installation of the **dependencies** can be performed by using the following commands:

```bash
# usage within a workspaces environment
yarn workspace @{scope}/{package} add --dev @microsft/api-extractor @microsft/api-documenter @alboe/api-extractor-config

# usage outside of a workspaces environment
yarn add --dev @microsoft/api-extractor @microsft/api-documenter @alboe/api-extractor-config
```

## Usage

This module is expected to be used with [API Extractor](https://api-extractor.com/).

This module is recommended to be used with [API Documenter](https://www.npmjs.com/package/@microsoft/api-documenter).

An API Extractor configuration file (`./api-extractor.config.json`) must be present within the focused project using the following configuration definition example:

```jsonc
// ./api-extractor.config.json

{
  "extends": "@alboe/api-extractor-config",
  "projectFolder": "."
}
```

This configuration will target all `./dist/types/**/*.d.ts` files within the focused project and generate output files within the `./dist/docs/api/metadata/**` folder.

Add the following scripts to the focused project's `./package.json` file to align with the commands within the **ALBOE** organization:

```jsonc
// ./package.json

{
  /* ...other package definition details... */
  "scripts": {
    /* ...other package definition scripts... */
    "build": "{...other build commands...} && yarn build:docs",
    "build:docs": "{...other documentation building commands...} && yarn build:docs:api",
    "build:docs:api": "yarn build:docs:api:metadata && yarn build:docs:api:markdown",
    "build:docs:api:markdown": "api-documenter markdown --input-folder ./dist/docs/api/metadata --output-folder ./dist/docs/api/markdown",
    "build:docs:api:metadata": "api-extractor run --local --verbose"
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
