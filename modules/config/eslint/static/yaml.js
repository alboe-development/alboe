import yaml from "eslint-plugin-yml";

/**
 * Generate an ESLint JSON configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => {
  const general = [
    {
      ...yaml.configs.recommended,
      language: "json/json",
    },
  ].map((config) => ({
    ...config,
    files: ["**/*.{y,ya}ml"],
  }));

  return [
    ...general,
  ];
};

export { generate as yaml };
