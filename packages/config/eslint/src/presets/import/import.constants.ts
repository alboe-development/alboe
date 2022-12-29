import type { PresetDefaults } from '../../models';

const DEFAULTS: PresetDefaults = {
  ENV: {},
  EXTENDS: [],
  GLOBALS: {},
  IGNORE_PATTERNS: [],
  OVERRIDES: {},
  PARSER: undefined,
  PARSER_OPTIONS: {},
  PLUGINS: [],
  RULES: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
  SETTINGS: {
    'import/extensions': [
      '.js',
      '.jsx',
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
  },
};

const CONSTANTS = {
  DEFAULTS,
};

export default CONSTANTS;
