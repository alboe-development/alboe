import ESLintMarkdown from "@eslint/markdown";

/**
 * Generate an ESLint ruleset to be applied to all Markdown files within this project.
 *
 * @returns {Array} - The generated ESLint ruleset.
 */
const markdown = () => ESLintMarkdown.configs.recommended.map((config) => ({
  ...config,
  files: ["**/*.md"],
  language: "markdown/gfm",
}));

export { markdown };
