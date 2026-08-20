import Path from "node:path";
import Process from "node:process";

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
    coverage = Process.argv.includes("--coverage"),
    entry = Process.env.CI ? "./dist/module" : "./src",
    location = Process.cwd(),
    manifest = {},
  } = options;

  const { name = "unknown" } = manifest;

  return {
    test: {
      alias: {
        [name]: Path.join(location, entry),
      },
      include: ["./src/**/*.test.*"],
      restoreMocks: true,
      coverage: {
        enabled: coverage,
        exclude: [
          "**/*.d.*",
          "**/*.test.*",
          "**/*.fixture.*",
        ],
        include: [
          Path.join(entry, "**/*.{js,ts}"),
        ],
        reportsDirectory: "./dist/docs/coverage",
        thresholds: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  };
};

export { generate as common };
