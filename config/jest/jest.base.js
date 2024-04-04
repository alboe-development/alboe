const config = {
  collectCoverage: true,
  collectCoverageFrom: ['./dist/module/**/*.*'],
  coverageDirectory: './docs/coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  maxWorkers: 1,
  restoreMocks: true,
  verbose: true,
};

module.exports = config;
