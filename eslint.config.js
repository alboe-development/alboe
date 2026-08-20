import {
  common,
  javascript,
  json,
  markdown,
  typescript,
  yaml,
} from "@alboe/eslint-config";

const config = [
  ...javascript(),
  ...json(),
  ...markdown(),
  ...typescript(),
  ...yaml(),
  ...common(),
];

module.exports = config;
