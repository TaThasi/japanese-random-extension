
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './Navbar.vue';
import VocabDisplay from './VocabDisplay.vue';
export default defineComponent({
  name: 'JapaneseWord',
  components: {
    Navbar,
    VocabDisplay
  },
})
</script>

<template>
  <div class=" w-full">
    <div class="w-full h-[10vh]">
      <Navbar />
    </div>
    <VocabDisplay />   
    <!-- Your other components go here -->
  </div>
</template>


