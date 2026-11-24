import { common, json, markdown } from "@alboe/eslint-config";

const config = [
  ...common(),
  ...json(),
  ...markdown(),
];

export default config;
