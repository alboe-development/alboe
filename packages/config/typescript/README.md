# @alboe/config-typescript

[![License - MIT](https://shields.io/badge/License-MIT-blue?style=flat)](https://github.com/AlboeDev/alboe/blob/main/packages/config/typescript/LICENSE)
![State - WIP](https://shields.io/badge/State-WIP-orange?style=flat)

**Alboe Development**'s [TypeScript](https://www.typescriptlang.org/) configuration package.

This package is designed to provide a core configuration definition for all packages within this project utilizing the [JavaScript](https://www.javascript.com/) superset: [TypeScript](https://www.typescriptlang.org/).

This package is only intended to be utilized within the [Alboe Development](https://github.com/AlboeDev) monorepo: [alboe](https://github.com/AlboeDev/alboe). It is published for additional packages to consume at the consumer's discretion.

**Table of Contents**

* [Requirements](#requirements)
* [Installation](#installation)
* [Consumption](#consumption)
* [Contribution](#contribution)
* [Scripts](#scripts)

## Requirements

This package has the following requirements:

* Node v18

This package uses a collection of dependencies that can be inferred from this package's [package definition file](https://github.com/AlboeDev/alboe/blob/main/packages/config/typescript/package.json). These dependencies should be automatically managed based on this package's definition file, along with your package manager.

## Installation

This package can be installed using the following commands:

```bash
# via npm
npm install --dev @alboe/config-typescript

# via yarn
yarn add --dev @alboe/config-typescript
```

## Consumption

This package is intended to be extended by another [Typescript Configuration File](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html). See the below example:

```json
// ./tsconfig.json
{
  "compilerOptions": {
    "declarationDir": "./dist/types",
    "outDir": "./dist/module"
  },
  "exclude": [
    "**/*.test.ts"
  ],
  "extends": "@alboe/config-typescript/dist/tsconfig.json",
  "include": [
    "./src/**/*.ts"
  ]
}
```

## Contribution

See the [contribution guide](https://github.com/AlboeDev/alboe/blob/main/README.md) available at the root of this project for more information on how to contribute.

## Scripts

The following scripts are available within this package:

* `analyze` - Execute all analysis scripts for this package.
  * `analyze:dist` - Analyze the distributable of this package.
  * `analyze:src` - Analyze the source of this package.
* `build` - Execute all building scripts for this package.
  * `build:dist` - Build the distributable for this package.
  * `build:docs` - Build the documentation for this package.
* `clean` - Execute all cleaning scripts for this package.
  * `clean:dist` - Clean the distributable for this package.
  * `clean:docs` - Clean the documentation for this package.
* `publish` - Execute all publishing scripts for this package.
  * `publish:npmjs` - Publish this package to [npmjs](https://www.npmjs.com/).
* `test` - Execute all testing scripts for this package.
  * `test:dist` - Test the distributable for this package.
  * `test:src` - Test the source for this package.
