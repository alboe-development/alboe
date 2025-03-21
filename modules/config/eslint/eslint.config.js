const { common, javascript } = require('./static');
const definition = require('./package.json');

const config = [
  ...javascript({ definition }),
  ...common(),
];

module.exports = config;
