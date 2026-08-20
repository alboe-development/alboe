import { common } from "@alboe/vitest-config";
import manifest from "./package.json" with { type: "json" };

const config = common({ manifest });

export default config;
