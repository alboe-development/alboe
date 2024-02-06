# Configuration - Husky

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: beta](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)
![scope: internal](https://img.shields.io/badge/Scope-Internal-red?style=flat-square)

The contents of this folder are used as a shared collection of scripts and files when applying a standard [Husky](https://typicode.github.io/husky/) configuration to this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

This folder is meant to be consumed as a **relative dependency** for this project, and should only be utilized from the top level of this project. This folder requires the following **dev-dependencies**:

* `husky`
* `@commitlint/cli`
* `@commitlint/config-conventional`

Installation of the required dependencies, local to this project, can be performed by using the following commands:

```bash
yarn add --dev husky @commitlint/cli @commitlint/config-conventional
```

## Usage

This folder is expected to be used with [Husky](https://typicode.github.io/husky/).

All configuration data for this folder is stored locally to this folder.

The following scripts can be amended to the package's `./package.json` file.

```json
{
  "scripts": {
    "postinstall": "{...other post install scripts...} && yarn postinstall:husky",
    "postinstall:husky": "yarn husky install ./config/husky/hooks",
  }
}
```

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
