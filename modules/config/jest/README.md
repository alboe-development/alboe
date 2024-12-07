# Configuration - Jest

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [Jest](https://jestjs.io/) ruleset to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This module is meant to be consumed as a **dev-dependency**, and requires the following **dependencies**:

* `dev-dependencies`
  * `jest`
  * `jest-silent-reporter`

Installation of the **dependencies** can be performed by using the following commands:

```bash
# usage within a workspaces environment
yarn workspace @{scope}/{package} add --dev jest @alboe/jest-config

# usage outside of a workspaces environment
yarn add --dev eslint jest @alboe/jest-config
```

## Usage

This folder is expected to be used with [jest](https://jestjs.io/).

A Jest configuration file (`./jest.config.js`) must be present within the focused module using the following configuration definition example:

```js
// ./jest.config.js

const { common } = require('@alboe/jest-config');

const config = {
  ...common,
  /* ...other configuration options... */
};

module.exports = config;
```

Add the following scripts to the focused project's `./package.json` file to align with the commands within the **ALBOE** organization:

```jsonc
// ./package.json

{
  /* ...other package definition details... */
  "scirpts": {
    /* ...other package definition scripts... */
    "test": "{...other test commands...} && yarn test:module && yarn test:coverage",
    "test:coverage": "yarn test:module --coverage --reporters=\"jest-silent-reporter\"",
    "test:module": "jest"
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.