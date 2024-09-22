# @alboe/typescript-config

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [TypeScript](https://www.typescriptlang.org/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation


This module is meant to be consumed as a **local dependency**, and requires the following **required dependencies**:

* `dev-dependencies`
  * `typescript`

Installation of the **required dependencies** can be performed by using the following commands:

```bash
# usage within a workspaces environment
yarn workspace @{scope}/{package} add --dev typescript @alboe/typescript-config

# usage outside of a workspaces environment
yarn add --dev typescript @alboe/typescript-config
```

## Usage

This package is expected to be used with [TypeScript](https://www.typescriptlang.org/).


A TypeScript configuration file must be consumed within the target package using the following configuration definition example:

A TypeScript configuration file (`./tsconfig.json`) must be present within the focused project using the following configuration definition example:

```jsonc
// ./tsconfig.json

{
  "extends": "@alboe/typescript-config/static/index.json",
  "include": [
    "./src/**/*.ts" // Set the files to include when building
  ]
}
```

This configuration will target all `./src/**/*.ts` files within the focused project and generate output files within the `./dist/module/**` and `./dist/types/**` folders.

Add the following scripts to the focused project's `./package.json` file to align with the commands within the **ALBOE** organization:

```jsonc
{
  /* ...other package definition details... */
  "scripts": {
    /* ...other package definition scripts... */
    "build": "{...other build commands...} && yarn build:module && yarn build:types",
    "build:module": "tsc --module CommonJS --outDir ./dist/module",
    "build:types": "tsc --module CommonJS --declaration --emitDeclarationOnly --declarationDir ./dist/types",
    "analyze": "{...other analysis commands...} && yarn analyze:syntax",
    "analyze:syntax": "tsc --noEmit"
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.

