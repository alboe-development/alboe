# @alboe/husky-config

**ALBOE Development** TypeScript configuration package.

[![License - MIT](https://shields.io/badge/License-MIT-blue?style=flat)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![State - WIP](https://shields.io/badge/State-WIP-orange?style=flat)

This package is designed as an internal, sharable [Husky](https://typicode.github.io/husky/) configuration package to use within all packages within this project.

* [Installation](#installation)
* [Usage](#usage)

# Installation

This project has the following platform requirements:

* **Node** *v18*
* **NPM** *v8*
* **Yarn** *v3*

This package is intended to be consumed as a **dev-dependency** and requires the following peer dependencies:

* `husky`
* `@commitlint/cli`
* `@commitlint/config-conventional`

Installation can be performed by using the following commands:

```bash
yarn add --dev @alboe/husky-config husky @commitlint/cli @commitlint/config-conventional
```

# Usage

This package is intended to be used with [Husky](https://typicode.github.io/husky/).

This package is intended to be used by the project root of this project only, and is not published to [NPM](https://www.npmjs.com/).

This package will be automatically triggered during a Git commit workflow after running the following command:

```bash
yarn postinstall
```

The above command automatically triggers when running the following command:

```bash
yarn
```
