const ts = require('typescript-eslint');

const generate = () => ts.configs.recommended.map((config) => {
  const mutated = {...config};

  mutated.files = ['**/*.ts'];

  return mutated;
});

module.exports = generate;
