import type { PresetDefaults } from '../../models';

const DEFAULTS: PresetDefaults = {
  ENV: {},
  EXTENDS: [
    'airbnb-base',
  ],
  GLOBALS: {},
  IGNORE_PATTERNS: [],
  OVERRIDES: {},
  PARSER: undefined,
  PARSER_OPTIONS: {},
  PLUGINS: [],
  RULES: {
    'class-methods-use-this': 'off',
  },
  SETTINGS: {},
};

const CONSTANTS = {
  DEFAULTS,
};

export default CONSTANTS;
