const { javascript, jest, typescript } = require('../../../config/eslint');
const definition = require('./package.json');

const config = {
  root: true,
  env: {
    node: true,
  },
  overrides: [
    ...javascript({ packageName: definition.name }).overrides,
    ...jest({ packageName: definition.name }).overrides,
    ...typescript({ packageName: definition.name }).overrides,
  ],
};

module.exports = config;
