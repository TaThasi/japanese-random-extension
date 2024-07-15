<script lang="ts" setup>
import axios from 'axios';
import {  ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from './store';
const email = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();
const handleSubmit = async (e: Event) => {
  e.preventDefault(); // Prevent the default form submission
  try {
    const response = await axios.post('http://localhost:3000/auth/signin', { 
      email: email.value, 
      password: password.value 
    });

    // Assuming your response structure is { data: { at: string; rt: string; User: { id: number; email: string } } }
    const data = response.data.data;
    userStore.setUser(data.User);
    userStore.setAtToken(data.at);
    userStore.setRtToken(data.rt);
    console.log(data.User);
    // Store the JWT token and user data in localStorage for future use
    localStorage.setItem('at_token', data.at);
    localStorage.setItem('rt_token', data.rt);
    localStorage.setItem('user', JSON.stringify(data.User));
    
    // Redirect to the home page
    router.push('/home');
  } catch (error) {
    console.log('An error occurred. Please try again later.')
  }
}
</script>

<template>
  <div class="flex items-start justify-center w-full px-4">
    <div class="w-full max-w-md space-y-4">
      <h1 class="font-bold text-3xl">Sign In</h1>
      <form @submit="handleSubmit">
        <div class="mb-4">
          <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            class="appearance-none border-b-2 border-black block w-full px-3 py-2 text-gray-700 rounded-md focus:outline-none focus:border-indigo-500" 
            v-model="email" 
            required 
          />
        </div>
        <div class="mb-4">
          <input 
            type="password" 
            id="password" 
            placeholder="Password" 
            class="appearance-none block w-full px-3 py-2 text-gray-700 border-b-2 border-black rounded-md focus:outline-none focus:border-indigo-500" 
            v-model="password" 
            required 
          />
        </div>
        <div>
          <button 
            type="submit" 
            class="w-full px-4 py-1 border-2 border-black rounded-lg border-b-4 text-xl font-bold"
          >
            Sign In
          </button>
          <p 
            class="text-sm text-gray-600 w-full text-center mt-2 cursor-pointer hover:underline hover:text-blue-500"
          >
            Forget password?
          </p>
        </div>
      </form>
    </div>
    <p class="absolute text-sm text-gray-600 w-full text-center bottom-4">
      Don't have an account? 
      <router-link to="/signup" class="text-blue-500 hover:underline hover:text-blue-600">
        Sign Up
      </router-link>
    </p>
  </div>
</template>
