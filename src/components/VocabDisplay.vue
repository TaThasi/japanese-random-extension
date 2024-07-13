<script lang="ts" setup>
    import { ref } from 'vue';
    const vocab = ref('こんにちは');
    const words = [
      "猫 (ねこ) - Cat",
      "犬 (いぬ) - Dog",
      "家 (いえ) - House",
      "本 (ほん) - Book",
      "学校 (がっこう) - School"
    ];
    const getWords = () => {
        const randomIndex = Math.floor(Math.random() * words.length) 
        vocab.value = words[randomIndex]
    }

</script>

<template>
    <section class=" flex flex-col justify-center items-center mt-10 space-y-10">
        <div class="">
            <p class=" font-medium text-2xl">
                {{  vocab }}
            </p>
        </div>
        <div>
            <button class=" px-4 py-2 border-2 rounded-lg border-black" @click="getWords">
                New word!
            </button>
        </div>
    </section>
</template>