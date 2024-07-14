import { createRouter, createWebHistory } from 'vue-router';
import VocabDisplay from '@/components/VocabDisplay.vue';
import SignIn from '@/components/Sign-in.vue';
import SignUp from '@/components/Sign-up.vue';
import Home from '@/view/Home.vue';
console.log(import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'VocabDisplay',
      component: VocabDisplay
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
  ]
});

export default router;
