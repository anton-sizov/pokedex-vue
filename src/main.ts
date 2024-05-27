import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './routes/router';
import { createPinia } from 'pinia';
import axios from 'axios';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const pinia = createPinia();
const vuetify = createVuetify();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

createApp(App)
    .use(router)
    .use(vuetify)
    .use(pinia)
    .mount('#app');
