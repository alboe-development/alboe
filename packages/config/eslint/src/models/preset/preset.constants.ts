import type { Defaults } from './preset.types';

const DEFAULTS: Defaults = {
  ENV: {},
  EXTENDS: [],
  GLOBALS: {},
  IGNORE_PATTERNS: [],
  OVERRIDES: {},
  PARSER: undefined,
  PARSER_OPTIONS: {},
  PLUGINS: [],
  RULES: {},
  SETTINGS: {},
};

const CONSTANTS = {
  DEFAULTS,
};

export default CONSTANTS;
