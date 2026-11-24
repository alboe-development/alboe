import Path from "node:path";
import Process from "node:process";
import { defineConfig } from "vitest/config";

/**
 * Generate a shared Vitest configuration for coverage testing a package.
 *
 * @param {object} options - Options used to generate the configuration.
 * @param {string} [options.entry] - Entry directory used for teh package-name aliases.
 * @param {string} [options.location] - Package root used to resolve output paths.
 * @returns {object} Vitest configuration for tests.
 */
const module = (options = {}) => {
  const {
    entry = Process.env.CI === "true" ? "dist/module" : "src",
    location = Process.cwd(),
  } = options;

  return defineConfig({
    test: {
      coverage: {
        enabled: true,
        exclude: [
          "**/*.d.*",
          "**/*.spec.*",
        ],
        include: [
          Path.join(entry, "**/*.{js,jsx,ts,tsx}"),
        ],
        reportsDirectory: Path.join(location, "dist/docs/reports/coverage"),
        thresholds: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  });
};

export { module };
