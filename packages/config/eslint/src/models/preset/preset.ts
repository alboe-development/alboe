import CONSTANTS from './preset.constants';
import type { Config } from './preset.types';

abstract class Preset {
  protected config: Config;

  public constructor(config: Config = {}) {
    this.config = config;
  }

  public get CONSTANTS(): typeof Preset.CONSTANTS {
    return Preset.CONSTANTS;
  }

  public get env(): Record<string, boolean> {
    return this.config.env || this.CONSTANTS.DEFAULTS.ENV;
  }

  public get extends(): Array<string> {
    return this.config.extends || this.CONSTANTS.DEFAULTS.EXTENDS;
  }

  public get globals(): Record<string, string> {
    return this.config.globals || this.CONSTANTS.DEFAULTS.GLOBALS;
  }

  public get ignorePatterns(): Array<string> {
    return this.config.ignorePatterns || this.CONSTANTS.DEFAULTS.IGNORE_PATTERNS;
  }

  public get overrides(): Record<string, any> {
    return this.config.overrides || this.CONSTANTS.DEFAULTS.OVERRIDES;
  }

  public get parser(): string | undefined {
    return this.config.parser || this.CONSTANTS.DEFAULTS.PARSER;
  }

  public get parserOptions(): Record<string, string> {
    return this.config.parserOptions || this.CONSTANTS.DEFAULTS.PARSER_OPTIONS;
  }

  public get plugins(): Array<string> {
    return this.config.plugins || this.CONSTANTS.DEFAULTS.PLUGINS;
  }

  public get rules(): Record<string, any> {
    return this.config.rules || this.CONSTANTS.DEFAULTS.RULES;
  }

  public get settings(): Record<string, any> {
    return this.config.settings || this.CONSTANTS.DEFAULTS.SETTINGS;
  }

  public get serial(): Record<string, any> {
    return {
      env: this.env,
      extends: this.extends,
      globals: this.globals,
      ignorePatterns: this.ignorePatterns,
      overrides: this.overrides,
      parser: this.parser,
      parserOptions: this.parserOptions,
      plugins: this.plugins,
      rules: this.rules,
      settings: this.settings,
    };
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  public static deepMerge(source: Record<number | string, any>, destination: Record<number | string, any>): any {
    return !source ? destination : Object.entries(source).reduce((output, [key, value]) => {
      const mutable = {...output};

      if (!value) {
        return mutable;
      } else if (typeof mutable[key] !== 'object' || typeof value !== 'object') {
        mutable[key] = value;
      } else if (Array.isArray(mutable[key]) || Array.isArray(value)) {
        mutable[key] = [...new Set([...mutable[key], ...value])];
      } else {
        mutable[key] = Preset.deepMerge(value, mutable[key]);
      }

      return mutable;
    }, destination);
  }

  public static merge(...presets: Array<Preset>): Preset {
    const merged = presets.reduce((output: Record<string, any>, preset: Record<string, any>) => (
      Preset.deepMerge(preset.serial, output)
    ), {});

    class MergedPreset extends Preset {
      public constructor() {
        super(merged);
      }
    };

    return new MergedPreset();
  }
}

export default Preset;
