# @alboe/api-extractor-config

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/alboe-development/alboe/blob/main/LICENSE)
![state: alpha](https://img.shields.io/badge/State\-Beta-blue?style=flat-square)

The contents of this module are used as a shared collection of scripts and files for applying a standard [API Extractor](https://api-extractor.com/) configuration to modules within this project

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
  "devDependencies": {
    /* ... */
    "@alboe/api-extractor-config": "workspace:*",
    "@microsoft/api-documenter": "catalog:",
    "@microsoft/api-extractor": "catalog:",
    "typescript": "catalog:"
  }
}
```

## Usage

This package is expected to be used with [API Extractor](https://api-extractor.com/), [API Documenter](https://api-extractor.com/pages/setup/generating_docs/), and [TypeScript](https://www.typescriptlang.org/).

Create an `api-extractor.json` file within the scope of a module and extend teh shared configuration:

```jsonc
/* ./api-extractor.json */

{
  "extends": "@alboe/api-extractor-config",
  "projectFolder": "."
}
```

The shared configuration expects the module declaration entry point to exist at `./dist/module/index.d.ts`. Add the following scripts to the module's manifest file, placing any calls to `api-extractor` to after the `index.d.ts` has been built, and any calls to after `api-documenter` to after the metadata has been built.

```jsonc
/* ./package.json */
{
  /* ... */
  "build": "{...} && pnpm build:docs",
  "build:docs": "{...} && pnpm build:docs:api",
  "build:docs:api": "{...} && pnpm build:docs:api:metadata && pnpm build:docs:api:markdown",
  "build:docs:api:markdown": "api-documenter --input-folder ./dist/docs/api/metadata --output-folder ./dist/docs/api-markdown",
  "build:docs:api:metadata": "api-extractor run --local --verbose"
}
```

After these commands are executed, the generated API markdown and metadata files will be written within the `./dist/docs/api/markdown` and `./dist/docs/api/metadata` folders respectfully.

## Contribute

Please see [CONTRIBUTING.md](https://github.com/alboe-development/alboe/blob/main/CONTRIBUTING.md) for more details.

## Maintainers

This package is maintained by **Alboe Development Team**.
