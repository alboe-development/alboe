export interface Config {
  env?: Record<string, boolean>;
  extends?: Array<string>;
  globals?: Record<string, string>;
  ignorePatterns?: Array<string>;
  overrides?: Record<string, any>;
  parser?: string;
  parserOptions?: Record<string, string>;
  plugins?: Array<string>;
  rules?: Record<string, any>;
  settings?: Record<string, any>;
}

export interface Defaults {
  ENV: Record<string, boolean>;
  EXTENDS: Array<string>;
  GLOBALS: Record<string, string>;
  IGNORE_PATTERNS: Array<string>;
  OVERRIDES: Record<string, any>;
  PARSER: string | undefined;
  PARSER_OPTIONS: Record<string, string>;
  PLUGINS: Array<string>;
  RULES: Record<string, any>;
  SETTINGS: Record<string, any>;
}
