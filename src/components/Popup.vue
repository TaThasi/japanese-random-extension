<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import Home from '@/view/Home.vue';

export default defineComponent({
  name: 'JapaneseWord',
  components: {
    Home,
    RouterView,
    RouterLink,
  },
  setup() {
    const isOpenRouter = ref(false);
    const handleButtonClick = () => {
      isOpenRouter.value = !isOpenRouter.value;
    };
    return {
      isOpenRouter,
      handleButtonClick,
    };
  },
});
</script>

<template>
  <div :class="{ hidden: isOpenRouter }" class="w-full h-[550px] flex flex-col items-center justify-center">
    <div class="flex items-center justify-center flex-col gap-y-1 text-center w-full">
      <h1 class="text-3xl font-bold mb-4">Welcome to My Japanese Vocabulary</h1>
      <p class="text-xl mb-6">Enhance your browsing experience with our awesome features.</p>
    </div>
    <div class="flex justify-center items-center w-full gap-x-4">
      <RouterLink to="/home">
        <button @click="handleButtonClick" class="cursor-pointer border-b-4 border-black rounded-lg px-2 py-1 text-xl bg-blue-500 shadow-sm shadow-black text-white">Get Started</button>
      </RouterLink>
      <RouterLink to="/signin">
        <button @click="handleButtonClick" class="cursor-pointer border-b-4 border-black rounded-lg px-2 py-1 text-xl shadow-black text-black bg-white">Sign In</button>
      </RouterLink>
    </div>
  </div>
  <div v-if="isOpenRouter">
    <Home />
  </div>
</template>
