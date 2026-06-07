import typescript from "typescript-eslint";

/**
 * Generate ESLint TypeScript configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => {
  const general = [
    ...typescript.configs.recommended,
    ...typescript.config({
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
      },
    }),
  ].map((config) => ({
    ...config,
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }));

  return [
    ...general,
  ];
};

export { generate as typescript };
