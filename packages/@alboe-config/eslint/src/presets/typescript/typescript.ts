import { Preset } from '../../models';
import type { PresetConfig } from '../../models';

import CONSTANTS from './typescript.constants';

class Typescript extends Preset {
  public constructor(config: PresetConfig = {}) {
    super({
      ...Typescript.CONSTANTS.DEFAULTS,
      ...config,
    });
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Typescript;
