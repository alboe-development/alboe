const Rules = require('./rules');
const Settings = reuire('./settings');

const eslint = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    BufferEncoding: 'readonly',
  },
  ignorePatterns: ['**/dist/**'],
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
  ],
  rules: Rules,
  settings: Settings,
};

module.exports = eslint;
