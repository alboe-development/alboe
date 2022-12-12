const Settings = {
  'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
};

module.exports = Settings;
