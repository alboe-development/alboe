import { common, json, markdown, yml } from "@alboe/eslint-config";

const config = [
  ...common(),
  ...json(),
  ...markdown(),
  ...yml(),
];

export default config;
