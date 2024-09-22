const json = require('eslint-plugin-json');

const generate = () => ([
  {
    ...json.configs.recommended,
    files: ['**/*.json', '**/*.jsonc'],
  }
]);

module.exports = generate;
