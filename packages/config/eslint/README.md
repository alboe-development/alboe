# @alboe/eslint-config

**ALBOE Development** ESLint configuration package.

[![License - MIT](https://shields.io/badge/License-MIT-blue?style=flat)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![State - WIP](https://shields.io/badge/State-WIP-orange?style=flat)

This package is designed as an internal, sharable [ESLint](https://eslint.org/) configuration package to use within all packages within this project.

* [Installation](#installation)
* [Usage](#usage)

# Installation

This project has the following platform requirements:

* **Node** *v18*
* **NPM** *v8*
* **Yarn** *v3*

This package is intended to be consumed as a **dev-dependency** and requires the following peer dependencies:

* `eslint`

Installation can be performed by using the following commands:

```bash
yarn add --dev @alboe/eslint-config eslint
```

# Usage

This package is intended to be used with [ESLint](https://eslint.org/).

An ESLint configuration file must be available within the localized package and include a definition similar to the following example:

```js
// ./.eslintrc.js

const config = {
  root: true, // Ignore all `.eslintrc.js` files in any parent directories.
  env: {
    node: true,
    // Any additional env values needed for the localized package.
  },
  extends: [
    '@alboe/eslint-config',
  ],
};

module.exports = config;
```

Once the above-defined `./.eslintrc.js` file has been generated, the following scripts can be amended to the localized `./package.json` file.

```json
{
  /* ... */
  "scripts": {
    "test:style": "eslint \"./{src,static,test}/**/*.*\"",
    "test:style:fix": "yarn test:style --fix"
  },
  /* ... */
}
```
