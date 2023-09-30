import { Objects } from '../../utils';

const DEFINITION = {
  PREFIX: 'adc',
};

const CONSTANTS = {
  DEFINITION,
};

Objects.deepFreeze<typeof CONSTANTS>(CONSTANTS);

export default CONSTANTS;
