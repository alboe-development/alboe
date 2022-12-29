# Alboe Monorepo

[![License - MIT](https://shields.io/badge/License-MIT-blue?style=flat)](https://github.com/AlboeDev/alboe/blob/main/packages/config/eslint/LICENSE)
![State - WIP](https://shields.io/badge/State-WIP-orange?style=flat)

**Alboe Development**'s [Monorepo](https://en.wikipedia.org/wiki/Monorepo) project.

This project is designed as a platform to manage all projects developed within the [Alboe Development](https://github.com/AlboeDev) organization by providing a core foundation using [Yarn](https://yarnpkg.com/).

**Table of Contents**

* [Requirements](#requirements)
* [Contribution](#contribution)
* [Scripts](#scripts)

## Requirements

This package has the following requirements:

* Node v18
* Yarn v4

This package uses a collection of dependencies that can be inferred from this package's [package definition file](https://github.com/AlboeDev/alboe/blob/main/package.json). These dependencies should be automatically managed based on this package's definition file, along with your package manager.

## Contribution

See the [contribution guide](https://github.com/AlboeDev/alboe/blob/main/README.md) for more information on how to contribute.

## Scripts

The following scripts are available within this package:

* `@workspaces` - Helper for executing workspace scripts in a consistent manner
* `@all` - Execute a script against all packages within this project.
* `@config` - Execute a script against all `@alboe/config-*` packages within this project.
  * `@config:eslint` - Execute a script against the @alboe/config-eslint package.
  * `@config:typescript` - Execute a script against the @alboe/config-typescript package.
* `build` - Execute the build script for every package within this project.
* `clean` - Execute the clean script for every package within this project.
