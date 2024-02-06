# Configuration - API Extractor

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this folder are used as a shared collection of scripts and files when applying a standard [API Extractor](https://api-extractor.com/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This folder is meant to be consumed as a **relative dependency**, and requires the following **dev-dependencies**:

* `@microsoft/api-extractor`
* `@microsoft/api-documenter`

Installation of the required dependencies, local to this project, can be performed by using the following commands:

```bash
yarn workspace @{scope}/{package} add --dev @microsoft/api-extractor @microsoft/api-documenter
```

## Usage

This folder is expected to be used with [API Extractor](https://api-extractor.com/).

An `api-extractor.config.json` configuration file must be consumed within the target package using the following configuration definition example:

```jsonc
// ./api-extractor.config.json

{
  "extends": "../../../config/api-extractor/index.json",
  "projectFolder": "."
}
```

This will target all built `*.d.ts` files within the `./dist/types/**` folder, and generate output files within the `./docs/api/metadata/**` folder.

This package is recommended to be used along side the `@microsoft/api-documenter` package by introducing the following script to the packages `./package.json` file.

```json
{
  "scripts": {
    "build": "{...other build commands...} && yarn build:docs",
    "build:docs": "{...other documentation build commands...} && yarn build:docs:api",
    "build:docs:api": "api-extractor run --local --verbose && api-documenter markdown --input-folder ./docs/api/metadata --output-folder ./docs/api/markdown",
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
