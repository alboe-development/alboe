import { common, javascript, json, markdown } from "@alboe/eslint-config";

const config = [
  ...common(),
  ...javascript(),
  ...json(),
  ...markdown(),
];

export default config;
