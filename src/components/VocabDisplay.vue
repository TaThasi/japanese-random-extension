<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const vocab = ref({
    word: 'こにちわ',
    meaning: '',
    furigana: '',
    romaji: '',
    level: '',
});
const words = ref([]);

onMounted(async () => {
    try {
        const res = await axios.get('https://jlpt-vocab-api.vercel.app/api/words?level=3&offset=20&limit=20');
        words.value = res.data.words;
    } catch (err) {
        console.error('Error fetching vocabulary:', err);
    }
});

const getWord = () => {
    if (words.value.length > 0) {
        const randomIndex = Math.floor(Math.random() * words.value.length);
        vocab.value = words.value[randomIndex];
    }
};

</script>


<template>
    <section class=" flex flex-col justify-center items-center mt-10 space-y-10">
        <div class=" items-center text-center flex flex-col">
            <p class=" font-medium text-2xl">
                {{  vocab.word }} {{vocab.furigana !== '' ? `( ${vocab.furigana} )` : ''}}
            </p>
            <p class="font-medium text-2xl flex-wrap">
                {{  vocab.meaning }}
            </p>

            <p class="font-medium text-2xl flex-wrap">
            </p>
        </div>
        <div class=" flex justify-center items-center">
            <button class=" px-4 py-2 border-2 rounded-lg border-black" @click="getWord">
                New word!
            </button>
        </div>
    </section>
</template>