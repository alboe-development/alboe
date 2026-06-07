import { common, javascript } from "@alboe/eslint-config";
import definition from "./package.json" with { type: "json" };

const config = [
  ...javascript({ definition }),
  ...common(),
];

export default config;
