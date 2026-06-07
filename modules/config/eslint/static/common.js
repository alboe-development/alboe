import stylistic from "@stylistic/eslint-plugin";
import spelling from "@cspell/eslint-plugin";

/**
 * Generate ESLint Common configuration for a module within this project.
 *
 * @returns {Array} - The generated configuration.
 */
const generate = () => ([
  {
    ignores: ["dist/"],
  },
  stylistic.configs.recommended,
  {
    plugins: {
      "@stylistic": stylistic,
      "@cspell": spelling,
    },
    rules: {
      "@cspell/spellchecker": ["warn", {}],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/max-len": ["error", { code: 120, comments: 120, ignoreUrls: true }],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
]);

export { generate as common };
