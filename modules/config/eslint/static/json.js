import json from "@eslint/json";

/**
 * Generate an ESLint JSON configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => {
  const general = [
    {
      ...json.configs.recommended,
      language: "json/json",
    },
  ].map((config) => ({
    ...config,
    files: ["**/*.json"],
  }));

  return [
    ...general,
  ];
};

export { generate as json };
