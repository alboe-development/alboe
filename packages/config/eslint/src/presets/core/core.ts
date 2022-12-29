import { Preset } from '../../models';
import type { PresetConfig } from '../../models';

import CONSTANTS from './core.constants';

class Core extends Preset {
  public constructor(config: PresetConfig = {}) {
    super(structuredClone(config));
  }

  public override get CONSTANTS(): typeof Core.CONSTANTS {
    return Core.CONSTANTS;
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Core;
