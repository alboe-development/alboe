const { common, javascript, typescript } = require('@alboe/eslint-config');
const definition = require('./package.json');

const config = [
  ...javascript({ definition }),
  ...typescript({ definition }),
  common,
];

module.exports = config;
