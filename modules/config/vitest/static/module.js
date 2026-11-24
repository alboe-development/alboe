import Path from "node:path";
import Process from "node:process";
import { defineConfig } from "vitest/config";

/**
 * Generate a shared Vitest configuration for module testing a package.
 *
 * @param {object} options - Options used to generate the configuration.
 * @param {string} [options.entry] - Entry directory used for teh package-name aliases.
 * @param {string} [options.location] - Package root used to resolve output paths.
 * @param {object} [options.manifest] - Package manifest used to create package aliases.
 * @returns {object} Vitest configuration for tests.
 */
const module = (options = {}) => {
  const {
    entry = Process.env.CI === "true" ? "dist/module" : "src",
    location = Process.cwd(),
    manifest: { name },
  } = options;

  return defineConfig({
    test: {
      alias: [
        {
          find: name,
          replace: Path.join(location, entry),
        },
      ],
      attachmentsDir: "./temp/test-attachments",
      include: ["src/**/*.spec.{js,jsx,ts,tsx}"],
      maxWorkers: 1,
      restoreMocks: true,
    },
  });
};

export { module };
