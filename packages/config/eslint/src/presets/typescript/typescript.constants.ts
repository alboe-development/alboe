import type { PresetDefaults } from '../../models';

const DEFAULTS: PresetDefaults = {
  ENV: {},
  EXTENDS: [],
  GLOBALS: {},
  IGNORE_PATTERNS: [],
  OVERRIDES: {},
  PARSER: '@typescript-eslint/parser',
  PARSER_OPTIONS: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  PLUGINS: [
    '@typescript-eslint',
  ],
  RULES: {
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
  },
  SETTINGS: {
    'import/extensions': [
      '.ts',
      '.tsx'
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
      ],
    },
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};

const CONSTANTS = {
  DEFAULTS,
};

export default CONSTANTS;
