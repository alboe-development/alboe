import { Preset } from '../../models';
import type { PresetConfig } from '../../models';

import CONSTANTS from './typescript.constants';

class Typescript extends Preset {
  public constructor(config: PresetConfig = {}) {
    super(structuredClone(config));
  }

  public override get CONSTANTS(): typeof Typescript.CONSTANTS {
    return Typescript.CONSTANTS;
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Typescript;
