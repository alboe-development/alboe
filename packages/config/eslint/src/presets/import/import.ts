import { Preset } from '../../models';
import type { PresetConfig } from '../../models';

import CONSTANTS from './import.constants';

class Import extends Preset {
  public constructor(config: PresetConfig = {}) {
    super(structuredClone(config));
  }

  public override get CONSTANTS(): typeof Import.CONSTANTS {
    return Import.CONSTANTS;
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Import;
