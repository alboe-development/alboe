import { defineConfig } from "vitest/config";
import { common } from "@alboe/vitest-config";
import manifest from "./package.json" with { type: "json" };

const config = defineConfig(common({ manifest }));

export default config;
