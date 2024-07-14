import { createApp } from 'vue';
import Popup from './components/Popup.vue';
import './index.css'
import router from './router';
const app = createApp(Popup)

app.use(router);
app.mount('#app');
