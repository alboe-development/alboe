/**
 * Generate ESLint Common configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => ([
  {
    rules: {
      'eol-last': ['error', 'always'],
      'max-len': ['error', { code: 120, comments: 100 }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
]);

module.exports = generate;
