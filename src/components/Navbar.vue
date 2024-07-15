<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from './store';
const isMenuOpen = ref(false);
const {user} = useUserStore();
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log(isMenuOpen.value);
};
</script>

<template>
  <nav class="border-b bg-white h-[10vh] flex items-center z-[999] fixed w-full top-0">
    <div class="container flex items-center justify-between mx-auto px-4 w-full">
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class="text-2xl font-bold w-[80%]">
        Japanese <span class="text-blue-500">Vocabulary</span>
      </div>
    </div>
  </nav>

  <div :class="` h-[550px] fixed top-0 left-0 w-64 bg-gray-300 z-[9999] text-white transform transition-transform duration-300 ease-in-out  ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`">
    <div class="p-4 flex justify-between">
      <div></div>
      <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="space-y-8 p-4 flex justify-center flex-col text-xl ">
      <template v-if="!user">
        <RouterLink to="/signin">
          <button class="text-black border-2 px-2 py-1 rounded-lg border-black w-full">
            Sign In
          </button>
        </RouterLink>
      </template>
      <template v-else>
        <div class=" flex gap-x-4 justify-start items-center">
          <i class="pi pi-user" style="color: slateblue"></i>
          <p class="text-xl font-medium text-blue-500 uppercase cursor-pointer pt-1">
           {{ user.name }}
          </p>
        </div>
      </template>
      <RouterLink to="/signin">
        <div class=" flex gap-x-4 justify-start items-center">
          <i class="pi pi-cog" style="color: slateblue"></i>
          <button class="text-black">
            Settings
          </button>
        </div>
      </RouterLink>
      <RouterLink to="/signin">
        <div class=" flex gap-x-4 justify-start items-center">
          <i class="pi pi-sync" style="color: slateblue"></i>
        <button class="text-black">
          Upgrade to Premium
        </button>
        </div>
      </RouterLink>
      <RouterLink to="/signin">
        <div class=" flex gap-x-4 justify-start items-center">
          <i class="pi pi-thumbs-up-fill" style="color: slateblue"></i>
        <button class="text-black">
          Support
        </button>
        </div>
      </RouterLink>
      <RouterLink to="/signin">
        <div class=" flex gap-x-4 justify-start items-center">
          <i class="pi pi-info-circle" style="color: slateblue"></i>
        <button class="text-black">
          About JpRand
        </button>
        </div>
      </RouterLink>
      <RouterLink to="/signin">
        <div class=" flex gap-x-4 justify-start items-center">
          <i class="pi pi-question-circle" style="color: slateblue"></i>
        <button class="text-black">
          FAQ
        </button>
        </div>
      </RouterLink>
      <!-- Add more menu items if needed -->
     <p class=" absolute bottom-4 text-sm font-medium text-black">Version: 1.0.0</p>
    </div>
    
  </div>

  <!-- Rest of your app goes here -->
  
</template>

