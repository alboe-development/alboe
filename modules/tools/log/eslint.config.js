import { common, javascript, json, markdown, typescript } from "@alboe/eslint-config";

const config = [
  ...common(),
  ...javascript(),
  ...json(),
  ...markdown(),
  ...typescript(),
];

export default config;
