import javascript from "@eslint/js";

/**
 * Generate ESLint JavaScript configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => {
  const general = [
    javascript.configs.recommended,
  ].map((config) => ({
    ...config,
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
    },
  }));

  return [
    ...general,
  ];
};

export { generate as javascript };
