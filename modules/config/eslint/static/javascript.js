const javascript = require('@eslint/js');
const jsdoc = require('eslint-plugin-jsdoc');

/**
 * @typedef Definition
 * @type {object}
 * @property {string} [type] - The module definition type to generate for.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {Definition} [definition] - The module definition to generate for.
 */

/**
 * Generate ESLint JavaScript configuration for a module within this project.
 *
 * @param {Options} [options] - Options to use when generating the configuration.
 * @returns {Array} - The generated configuration.
 */
const generate = (options = {}) => {
  const { definition = {} } = options;
  const type = definition.type ? definition.type.toLowerCase() : 'commonjs';
  const languageOptions = { sourceType: type };
  const generalFiles = type === 'module' ? ['**/*.{js,cjs}'] : ['**/*.{js,mjs}'];
  const sourceFiles = type === 'module' ? ['{src,static}/**/*.{js,cjs}'] : ['{src,static}/**/*.{js,mjs}'];

  const general = [
    javascript.configs.recommended,
  ].map((config) => ({
    ...config,
    files: generalFiles,
    languageOptions,
  }));

  const source = [
    jsdoc.configs['flat/recommended'],
    {
      plugins: {
        jsdoc,
      },
      rules: {
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
          },
        ],
        'jsdoc/tag-lines': 'off',
      },
    },
  ].map((config) => ({
    ...config,
    files: sourceFiles,
  }));

  return [
    ...general,
    ...source,
  ];
};

module.exports = generate;
