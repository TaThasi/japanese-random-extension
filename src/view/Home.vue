<script lang="ts">
import { defineComponent, computed } from 'vue';
import VocabDisplay from '@/components/VocabDisplay.vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'JapaneseWord',
  components: {
    VocabDisplay,
    RouterView,
  },
});
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-[90vh] flex justify-center items-center flex-col">
      <RouterView/>
    </div>
  </div>
</template>

