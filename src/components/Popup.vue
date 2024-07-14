
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './Navbar.vue';
import VocabDisplay from './VocabDisplay.vue';
import {RouterView} from 'vue-router'
export default defineComponent({
  name: 'JapaneseWord',
  components: {
    Navbar,
    VocabDisplay
  },
})
</script>

<template>
  <div class="w-full h-full">
    <Navbar />
    <div class="w-full h-[90vh] flex justify-center items-center">
      <RouterView />
    </div>
  </div>
</template>


