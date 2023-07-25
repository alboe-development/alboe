# @alboe/typescript-config

**ALBOE Development** TypeScript configuration package.

[![License - MIT](https://shields.io/badge/License-MIT-blue?style=flat)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![State - WIP](https://shields.io/badge/State-WIP-orange?style=flat)

This package is designed as an internal, sharable [TypeScript](https://www.typescriptlang.org/) configuration package to use within all packages within this project.

* [Installation](#installation)
* [Usage](#usage)

# Installation

This project has the following platform requirements:

* **Node** *v18*
* **NPM** *v8*
* **Yarn** *v3*

This package is intended to be consumed as a **dev-dependency** and requires the following peer dependencies:

* `typescript`

Installation can be performed by using the following commands:

```bash
yarn add --dev @alboe/typescript-config typescript
```

# Usage

This package is intended to be used with [TypeScript](https://www.typescriptlang.org/).

A TypeScript configuration file must be available within the localized package and include a definition similar to the following example:

```json5
// ./tsconfig.json

{
  "extends": "@alboe/typescript-config/static/index.json",
  "compilerOptions": {
    "outDir": "./dist/module", // Required for configuration localization.
    "declarationDir": "./dist/types", // Required for configuration localization.
  },
  "include": [
    "./src/**/*.ts" // Required for configuration localization.
  ]
}
```

Once the above-defined `./tsconfig.json` file has been generated, the following scripts can be amended to the localized `./package.json` file.

```json5
{
  /* ... */
  "scripts": {
    "build": "yarn build:src",
    "build:src": "yarn build:src:module",
    "build:src:module": "tsc",
    "test:syntax": "tsc --noEmit",
  },
  /* ... */
}
```
