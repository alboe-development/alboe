/**
 * Generate an ESLint Ruleset to be applied to all files within this project.
 *
 * @returns {Array} - The generated ESLint ruleset.
 */
const common = () => ([
  {
    ignores: [
      "dist/",
      "node_modules/",
    ],
  },
]);

export { common };
