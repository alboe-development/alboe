const Rules = {
  'import/extensions': 'off',
  'import/no-extraneous-dependencies': ['off', {
    devDependencies: [
      '**/config/**/*.*',
      '**/jest.config.*',
      '**/test/**/*.*',
    ],
  }],
  'import/no-relative-packages': 'off',
  'import/prefer-default-export': 'off',
};

module.exports = Rules;
