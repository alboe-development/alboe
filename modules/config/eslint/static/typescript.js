const typescript = require('typescript-eslint');
const jsdoc = require('eslint-plugin-jsdoc');
const tsdoc = require('eslint-plugin-tsdoc');

/**
 * Generate ESLint TypeScript configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => {
  const languageOptions = { parser: typescript.parser };

  const general = [
    ...typescript.configs.recommended,
  ].map((config) => ({
    ...config,
    files: ['**/*.ts'],
  }));

  const source = [
    jsdoc.configs['flat/typescript-recommended'],
    {
      plugins: {
        jsdoc,
        tsdoc,
      },
      rules: {
        'jsdoc/check-tag-names': 'off',
        'tsdoc/syntax': 'error',
        'jsdoc/require-jsdoc': [
          'warn',
          {
            publicOnly: { ancestorsOnly: false },
            require: {
              FunctionDeclaration: true,
              FunctionExpression: true,
              ArrowFunctionExpression: true,
              ClassDeclaration: true,
              ClassExpression: true,
              MethodDefinition: true,
            },
            contexts: [
              'VariableDeclaration',
              'TSTypeAliasDeclaration',
              'TSPropertySignature',
              'TSInterfaceDeclaration',
              'TSMethodSignature',
              'TSEnumDeclaration'
            ],
          },
        ],
      },
    },
  ].map((config) => ({
    ...config,
    files: ['src/**/*.ts'],
    languageOptions,
  }));

  return [
    ...general,
    ...source,
  ];
};

module.exports = generate;
