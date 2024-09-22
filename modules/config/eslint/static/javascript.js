const js = require('@eslint/js');

const generate = (options = {}) => {
  const { definition = {} } = options;
  const type = definition.type ? definition.type.toLowerCase() : 'commonjs';
  const files = [];

  switch (type) {
    case 'commonjs':
      files.push('**/*.js', '**/*.mjs');
      break;

    case 'module':
      files.push('**/*.js', '**/*.cjs');
      break;
  }

  return [
    {
      ...js.configs.recommended,
      files,
      languageOptions: {
        sourceType: type,
      },
    },
  ];
};

module.exports = generate;
