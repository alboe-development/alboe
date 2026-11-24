import ESLintJSON from "@eslint/json";

/**
 * Generate an ESLint ruleset to be applied to all JSON files within this project.
 *
 * @returns {Array} - The generated ESLint ruleset.
 */
const json = () => ([
  {
    ...ESLintJSON.configs.recommended,
    files: ["**/*.json"],
    language: "json/json",
  },
]);

export { json };
