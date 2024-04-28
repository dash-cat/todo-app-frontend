import { createApp } from 'vue';
import App from './App.vue';
import Client from './Client';

const app = createApp(App);
app.config.globalProperties.$client = new Client();
app.mount('#app');
