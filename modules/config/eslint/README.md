# Configuration - ESLint

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this module are used as a shared collection of scripts and files when applying a standard [ESLint](https://eslint.org/) ruleset to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This module is meant to be consumed as a **dev-dependency**, and requires the following **dependencies**:

* `dev-dependencies`
  * `eslint`
  * `typescript` _optional: required when analyzing typescript files_

Installation of the **dependencies** can be performed by using the following commands:

```bash
# usage within a workspaces environment
yarn workspace @{scope}/{package} add --dev eslint typescript @alboe/eslint-config

# usage outside of a workspaces environment
yarn add --dev eslint typescript @alboe/eslint-config
```

## Usage

This folder is expected to be used with [ESLint](https://eslint.org/).

An ESLint configuration file (`./eslint.config.js`) must be present within the focused module using the following configuration definition example:

```js
// ./.eslintrc.js

const { common, javascript, typescript } = require('@alboe/eslint-config');
const definition = require('./package.json');

const config = [
  ...javascript({ definition }), // for javascript
  ...typescript({ definition }), // for typescript
  common, // common ruleset
];

module.exports = config;
```

This configuration will provide rulesets and parsers for both JavaScript and Typescript languages with a common applied ruleset for all files.

Add the following scripts to the focused project's `./package.json` file to align with the commands within the **ALBOE** organization:

```jsonc
// ./package.json

{
  /* ...other package definition details... */
  "scirpts": {
    /* ...other package definition scripts... */
    "analyze": "{...other analysis commands...} && yarn analyze:style",
    "analyze:style": "eslint \"./{src,test}/**/*.{js,mjs,cjs,ts}\"",
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.