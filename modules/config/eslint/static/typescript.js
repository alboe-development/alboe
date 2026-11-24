import ESLintTypeScript from "typescript-eslint";
import Stylistic from "@stylistic/eslint-plugin";

/**
 * Generate an ESLint ruleset to be applied to all TypeScript files within this project.
 *
 * @returns {Array} - The generated ESLint ruleset.
 */
const typescript = () => ([
  ...ESLintTypeScript.configs.recommended,
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
      "@stylistic/member-delimiter-style": ["error", {
        singleline: {
          delimiter: "semi",
          requireLast: true,
        },
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
      }],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
].map((config) => ({
  ...config,
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parser: ESLintTypeScript.parser,
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
    },
  },
})));

export { typescript };
