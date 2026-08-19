# Tools - Log

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![availabilty: internal](https://img.shields.io/badge/Availability-Internal-blue?style=flat-square)

The contents of this module are used as a shared collection of logging tools to be used within this project.

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Maintainers](#maintainers)

## Installation

Installation of this module and its required dependencies can be performed within this project by updating the module's manifest to include thie following dependencies:

```jsonc
/* ./package.json */
{
  /* ... */
  "dependencies": {
    /* ... */
    "@alboe/log-tools": "workspace:*",
  }
}
```

## Usage

This module is expected to be used as a ESM module within the source code of another module. Please review the [API documentation](./dist/docs/api/markdown/index.md) after executing `pnpm build` for more information.

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
