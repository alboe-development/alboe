const Core = require('./core');
const Import = require('./import');
const Typescript = require('./typescript');

const Rules = {
  ...Core,
  ...Import,
  ...Typescript,
};

module.exports = Rules;
