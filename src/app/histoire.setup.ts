import { defineSetupVue3 } from '@histoire/plugin-vue';

import 'modern-normalize/modern-normalize.css';
import 'unfonts.css';
import 'app/main.css';

import { Theme } from 'shared/ui';

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(Theme);
});
