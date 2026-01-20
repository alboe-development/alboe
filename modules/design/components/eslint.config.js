import { common, javascript, typescript } from '@alboe/eslint-config';
import definition from './package.json' with { type: 'json' };

const config = [
  ...javascript({ definition }),
  ...typescript({ definition }),
  ...common(),
];

export default config;
