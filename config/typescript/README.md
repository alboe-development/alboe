# Configuration - TypesScript

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this folder are used as a shared collection of scripts and files when applying a standard [TypeScript](https://www.typescriptlang.org/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This folder is meant to be consumed as a **relative dependency**, and requires the following **dev-dependencies**:

* `typescript`

Installation of the required dependencies, local to this project, can be performed by using the following commands:

```bash
yarn workspace @{scope}/{package} add --dev typescript
```

## Usage

This package is expected to be used with [TypeScript](https://www.typescriptlang.org/).

A TypeScript configuration file must be consumed within the target package using the following configuration definition example:

```jsonc
// ./tsconfig.json

{
  "extends": "../../../config/typescript/tsconfig.base.json",
  "include": [
    "./src/**/*.ts" // Set the files to include when building.
  ]
}
```

Once the `./tsconfig.json` file has been configured based on the information provided above, the following scripts can be amended to the package's `./package.json` file.

```jsonc
{
  "scripts": {
    "build": "{...other build commands...} && yarn build:dist",
    "build:dist": "tsc --declaration --declarationMap --declarationDir ./dist/types --module CommonJS --outDir ./dist/module",
    "test:src:syntax": "tsc --noEmit"
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
