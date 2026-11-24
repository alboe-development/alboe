import { module } from "@alboe/vitest-config";
import manifest from "./package.json" with { type: "json" };

const config = module({ manifest });

export default config;
