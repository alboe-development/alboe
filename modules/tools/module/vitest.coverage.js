import { mergeConfig } from "vitest/config";
import { coverage, module } from "@alboe/vitest-config";
import manifest from "./package.json" with { type: "json" };

const config = mergeConfig(
  module({ manifest }),
  coverage(),
);

export default config;
