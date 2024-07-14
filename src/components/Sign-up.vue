<script lang="ts" setup>
import { ref } from 'vue';

const email = ref('');
const name = ref('');
const password = ref('');

const handleSubmit = () => {
  // Handle form submission logic
  console.log('Email:', email.value);
  console.log('Password:', password.value);
};
</script>

<template>
  <div class="flex items-start justify-center w-full px-4 ">
    <div class="w-full max-w-md space-y-4">
        <h1 class=" font-bold text-3xl">Sign Up</h1>
        <form @submit="handleSubmit">
            <div class="mb-4">
                <input type="text" id="name" placeholder="Name" class="appearance-none block w-full px-3 py-2 text-gray-700 border-b-2 border-black rounded-md focus:outline-none focus:border-indigo-500" v-model="name" required>
            </div>
            <div class="mb-4">
                <input type="email" id="email" placeholder="Email" class="appearance-none border-b-2 border-black block w-full px-3 py-2 text-gray-700 rounded-md focus:outline-none focus:border-indigo-500" v-model="email" required>
            </div>
            <div class="mb-4">
                <input type="password" id="password" placeholder="Password" class="appearance-none block w-full px-3 py-2 text-gray-700 border-b-2 border-black rounded-md focus:outline-none focus:border-indigo-500" v-model="password" required>
            </div>

            <div>
                <button type="submit"class=" w-full px-4 py-1 border-2 border-black rounded-lg border-b-4 text-xl font-bold"> Sign Up</button>
                <!-- <p class="text-sm text-gray-600 w-full text-center mt-2 cursor-pointer hover:underline hover:text-blue-500">Forget password?</p> -->
            </div>
        </form>
    </div>
    <p class=" absolute text-sm text-gray-600 w-full text-center bottom-4">If you have an account? <RouterLink to="/signin" class="text-blue-500 hover:underline hover:text-blue-600">Sign In</RouterLink></p>
  </div>
</template>

