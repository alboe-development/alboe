# Configuration - ESLint

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this folder are used as a shared collection of scripts and files when applying a standard [ESLint](https://eslint.org/) ruleset to modules within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This folder is meant to be consumed as a **relative dependency**, and requires the following **dev-dependencies**:

* **javascript**
  * `eslint`
  * `eslint-config-airbnb-base`
  * `eslint-plugin-import`
  * `eslint-plugin-jsdoc`
* **typescript**
  * `eslint`
  * `eslint-config-airbnb-base`
  * `eslint-plugin-import`
  * `eslint-plugin-jsdoc`
  * `eslint-config-airbnb-typescript`
  * `eslint-plugin-tsdoc`
  * `@typescript-eslint/eslint-plugin`
  * `@typescript-eslint/parser`
  * `typescript`
* **jest**
  * `eslint`
  * `eslint-config-airbnb-base`
  * `eslint-plugin-import`
  * `jest`


Installation of the required dependencies, local to this project, can be performed by using the following commands:

```bash
# javascript
yarn workspace @{scope}/{package} add --dev \
  eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import \
  eslint-plugin-jsdoc

# typescript
yarn workspace @{scope}/{package} add --dev \
  eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import \
  eslint-plugin-jsdoc \
  eslint-config-airbnb-typescript \
  eslint-plugin-tsdoc \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  typescript

# jest
yarn workspace @{scope}/{package} add --dev \
  eslint \
  eslint-config-airbnb-base \
  eslint-plugin-jsdoc \
  jest
```

## Usage

This folder is expected to be used with [ESLint](https://eslint.org/).

An ESLint configuration file must be consumed within the target package using the following configuration definition example:

```js
// ./.eslintrc.js

const { javascript, jest, typescript } = require('../../../config/eslint');
const definition = require('./package.json');

const config = {
  root: true,
  env: {
    node: true,
  },
  overrides: [
    ...javascript({ packageName: definition.name }).overrides,
    ...jest({ packageName: definition.name }).overrides,
    ...typescript({ packageName: definition.name }).overrides,
  ],
};

module.exports = config;
```

Once the `./.eslintrc.js` file has been configured based on the information provided above, the following scripts can be amended to the package's `./package.json` file.

```jsonc
{
  "scripts": {
    "test": "{...other test commands...} && yarn test:src",
    "test:src": "{...other source test commands...} && yarn test:src:style",
    "test:src:style": "eslint \"./{src,test}/**/*.{js,ts}\"",
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
