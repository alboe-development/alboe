const Rules = {
  'class-methods-use-this': 'off',
  'no-confusing-arrow': 'off',
  'no-shadow': 'off',
  'no-unused-vars': 'off',
  'max-len': ['error', { code: 120 }],
  indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'], SwitchCase: 1 }],
  'object-curly-newline': 'off',
  'tsdoc/syntax': 'warn',
  'no-unsafe-optional-chaining': 'off',
  'no-nonoctal-decimal-escape': 'off',
};

module.exports = Rules;
