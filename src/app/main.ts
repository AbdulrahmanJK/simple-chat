import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'modern-normalize/modern-normalize.css';
import './media.css';
import './variables.css';
import './fonts.css';
import './main.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
