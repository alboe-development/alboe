import CONSTANTS from './preset.constants';
import type { Config } from './preset.types';

abstract class Preset {
  protected config: Config;

  public constructor(config: Config) {
    this.config = config;
  }

  public get env(): Record<string, boolean> {
    return this.config.env || Preset.CONSTANTS.DEFAULTS.ENV;
  }

  public get extends(): Array<string> {
    return this.config.extends || Preset.CONSTANTS.DEFAULTS.EXTENDS;
  }

  public get globals(): Record<string, string> {
    return this.config.globals || Preset.CONSTANTS.DEFAULTS.GLOBALS;
  }

  public get ignorePatterns(): Array<string> {
    return this.config.ignorePatterns || Preset.CONSTANTS.DEFAULTS.IGNORE_PATTERNS;
  }

  public get overrides(): Record<string, any> {
    return this.config.overrides || Preset.CONSTANTS.DEFAULTS.OVERRIDES;
  }

  public get parser(): string | undefined {
    return this.config.parser || Preset.CONSTANTS.DEFAULTS.PARSER;
  }

  public get parserOptions(): Record<string, string> {
    return this.config.parserOptions || Preset.CONSTANTS.DEFAULTS.PARSER_OPTIONS;
  }

  public get plugins(): Array<string> {
    return this.config.plugins || Preset.CONSTANTS.DEFAULTS.PLUGINS;
  }

  public get rules(): Record<string, any> {
    return this.config.rules || Preset.CONSTANTS.DEFAULTS.RULES;
  }

  public get settings(): Record<string, any> {
    return this.config.settings || Preset.CONSTANTS.DEFAULTS.SETTINGS;
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  public static merge(...presets: Array<Preset>): Preset {
    const merged = presets.reduce((output: Record<string, any>, preset: Record<string, any>) => {
      const mutable: Record<string, any> = {};

      mutable.env = [...output.env, ...preset.env];
      mutable.extends = [...output.extends, ...preset.extends];
      mutable.globals = { ...output.globals, ...preset.globals };
      mutable.ignorePatterns = [...output.ignorePatterns, ...preset.ignorePatterns];
      mutable.parser = preset.parser || output.parser;
      mutable.parserOptions = { ...output.parserOptions, ...preset.parserOptions };
      mutable.plugins = [...output.plugins, ...preset.plugins];
      mutable.rules = { ...output.rules, ...preset.rules };
      mutable.settings = { ...output.settings, ...preset.settings };

      return mutable;
    }, {});

    class MergedPreset extends Preset {
      public constructor() {
        super(merged);
      }
    };

    return new MergedPreset();
  }
}

export default Preset;
