import Path from 'node:path';
import Process from 'node:process';

/**
 * Common Vitest configuration generator for the Alboe project.
 * 
 * @param {object} options - Options used to generate the configuration.
 * @param {boolean} [options.coverage] - Whether or not coverage reporting is on.
 * @param {string} [options.entry] - The entry directory for the module's source code.
 * @param {string} [options.location] - The location of the module.
 * @param {object} [options.manifest] - The package manifest (package.json) of the module.
 * @returns {object} - Vitest configuration object.
 */
const generate = (options = {}) => {
  const {
    coverage = Process.argv.includes('--coverage'),
    entry = Process.env.ENTRY ?? 'src',
    location = Process.cwd(),
    manifest = {},
  } = options;

  const { name = 'unknown' } = manifest;

  return {
    test: {
      alias: {
        [name]: Path.join(location, entry),
      },
      coverage: {
        exclude: ['**/*.d.*', '**/*.test.*'],
        include: [Path.join(entry, '**/*.*')],
        reportsDirectory: Path.join(location, 'dist/docs/coverage/module'),
        thresholds: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
      mockReset: true,
      reporters: [coverage ? 'dot' : 'default'],
    },
  };
};

export { generate as common };
