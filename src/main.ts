import { createApp } from 'vue';
import Popup from './components/Popup.vue';
import './index.css'
import router from './router';
import "primeicons/primeicons.css";
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(Popup)
app.use(router);
app.use(pinia);
app.mount('#app');
