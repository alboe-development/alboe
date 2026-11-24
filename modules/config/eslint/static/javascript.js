import ESLintJavaScript from "@eslint/js";
import Stylistic from "@stylistic/eslint-plugin";

/**
 * Generate an ESLint ruleset to be applied to all JavaScript files within this project.
 *
 * @returns {Array} - The generated ESLint ruleset.
 */
const javascript = () => ([
  ESLintJavaScript.configs.recommended,
  Stylistic.configs.recommended,
  {
    languageOptions: {
      sourceType: "module",
    },
    plugins: {
      "@stylistic": Stylistic,
    },
    rules: {
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/max-len": ["error", { code: 120, comments: 120, ignoreStrings: true, ignoreUrls: true }],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
].map((config) => ({
  ...config,
  files: ["**/*.{cjs,js,jsx,mjs}"],
})));

export { javascript };
