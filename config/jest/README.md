# Configuration - Jest

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this folder are used as a shared collection of scripts and files when applying a standard [Jest](https://jestjs.io/) configuration to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This folder is meant to be consumed as a **relative dependency**, and requires the following **dev-dependencies**:

* `jest`

Installation of the required dependencies, local to this project, can be performed by using the following commands:

```bash
yarn workspace @{scope}/{package} add --dev jest
```

## Usage

This folder is expected to be used with [Jest](https://jestjs.io/).

A `./jest.config.js` configuration file must be consumed within the target package using the following configuration definition example:

```js
// ./jest.config.js

const { base } = require('../../../config/jest');

module.exports = base;
```

Once the `./jest.config.js` file has been configured based on the information provided above, the following scripts can be amended to the package's `./package.json` file.

```jsonc
{
  "scripts": {
    "test": "{...other test commands...} && yarn test:dist",
    "test:dist": "{...other distribution test commands...} && yarn test:dist:module",
    "test:dist:module": "jest ./test/module/**/*.test.js",
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
