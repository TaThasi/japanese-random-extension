<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import Navbar from './Navbar.vue';
interface Word {
    id: number;
    jnpt: string;
    VocabExpression: string;
    VocabKana: string;
    VocabMeaning: string;   
    VocabPos: string;
    SentenceExpression: string;
    SentenceKana: string;
    SentenceMeaning: string;
    VocabFurigana: string;
    SentenceCloze: string;
}

// Define a Map to hold the reminders with count
const remind = ref<Map<Word, number>>(new Map());

// Define a ref to hold the current vocabulary item
const vocab = ref<Word | null>(null);
const limit = ref<string>('10');
const level = ref<string>('JLPT3');
const words = ref<Word[]>([]);
const idRemid = ref<Set<number>>(new Set());
const fetchWords = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/word?level=${level.value}&limit=${limit.value}`);
        words.value = res.data;
        console.log(words.value);
    } catch (err) {
        console.error('Error fetching vocabulary:', err);
    }
}

onMounted(fetchWords);

watch([limit, level], fetchWords);

const getWord = () => {
    if (words.value.length > 0) {
        const randomIndex = Math.floor(Math.random() * words.value.length);
        const selectedWord = words.value[randomIndex];
        vocab.value = selectedWord;

        if (remind.value.has(selectedWord)) {
            remind.value.set(selectedWord, (remind.value.get(selectedWord) ?? 0) + 1);
            const time = <number> remind.value.get(selectedWord)
            if(time > 3) {
                idRemid.value.add(selectedWord.id);
            }
        } else {
            remind.value.set(selectedWord, 1);
        }
    }
};
</script>
<template>
    <div class="w-full">
        <Navbar />
    </div>
    <section class="flex flex-col justify-center items-center mt-10 space-y-10">
        <div class="flex justify-center items-center px-4 space-x-4 w-full max-w-xl">
            <div class="flex justify-center items-center">
                <label for="level" class="mr-2 font-semibold">Level:</label>
                <select v-model="level" id="level" class="border rounded-lg px-2 py-1">
                    <option value="JLPT0">JLPT0</option>
                    <option value="JLPT1">JLPT1</option>
                    <option value="JLPT2">JLPT2</option>
                    <option value="JLPT3">JLPT3</option>
                    <option value="JLPT4">JLPT4</option>
                </select>
            </div>
            <div class="flex justify-center items-center gap-x-2">
                <label for="limit" class="font-semibold">Limit:</label>
                <input  type="number" id="limit" min="1" max="100" class="border rounded-lg px-2 py-1" v-model="limit"/>
            </div>
        </div>
        <div class="items-center text-center flex flex-col w-full max-w-xl">
            <p class="font-medium text-2xl">
                {{ vocab?.VocabExpression }} {{ vocab?.VocabFurigana !== '' ? `( ${vocab?.VocabFurigana} )` : '' }}
            </p>
            <p class="font-medium text-2xl flex-wrap">
                {{ vocab?.VocabMeaning }}
            </p>
            <p class="font-medium text-2xl flex-wrap">
                {{ vocab?.SentenceExpression }}
            </p>
        </div>
        <div class="flex justify-center items-center">
            <button class="px-4 py-2 border-2 rounded-lg border-black" @click="getWord">
                New word!
            </button>
        </div>
    </section>
</template>