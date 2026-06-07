import markdown from "@eslint/markdown";

/**
 * Generate ESLint Markdown configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => {
  const general = [
    ...markdown.configs.recommended,
  ].map((config) => ({
    ...config,
    files: ["**/*.md"],
  }));

  return [
    ...general,
  ];
};

export { generate as markdown };
