require('@rushstack/eslint-patch/modern-module-resolution');

const javascript = require('./javascript');
const typescript = require('./typescript');

const config = {
  overrides: [],
};

config.overrides.push(...javascript.overrides);
config.overrides.push(...typescript.overrides);

module.exports = config;
