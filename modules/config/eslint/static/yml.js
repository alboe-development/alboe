import ESLintYML from "eslint-plugin-yml";

/**
 * Generate an ESLint ruleset to be applied to all YML files within this project.
 *
 * @returns {Array} - The generated ESLint ruleset.
 */
const yml = () => ([
  ...ESLintYML.configs.recommended,
].map((config) => ({
  ...config,
  files: ["**/*.{y,ya}ml"],
  ignores: ["*lock.*"],
})));

export { yml };
