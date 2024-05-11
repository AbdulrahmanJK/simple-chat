import { defineSetupVue3 } from '@histoire/plugin-vue';

import 'modern-normalize/modern-normalize.css';
import './main.css';

import { Theme } from 'shared/ui';

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(Theme);
});
