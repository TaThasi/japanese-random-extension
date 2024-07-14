import { createRouter, createWebHistory} from 'vue-router'
import VocabDisplay from '@/components/VocabDisplay.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/home',
            name: 'home',
            component: VocabDisplay 
        }
    ]
});


export default router