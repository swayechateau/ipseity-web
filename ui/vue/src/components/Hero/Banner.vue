<script setup lang="ts">
    defineProps<{ 
        large: boolean,
        hero: string,
        title: string,
        subtitle: string 
    }>()
</script>
<template>
    <div
        v-bind:class="`w-full min-h-max bg-cover bg-no-repeat bg-center flex flex-col ${ large ? 'h-screen' : 'h-[50vh]'}`"
        v-bind:style="`background-image: url(${hero})`"
    >
        <div class="flex items-center justify-center grow">
            <div
                class="rounded-xl text-white transition-all ease-in m-4 p-7 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] bg-[rgba(99,108,98,0.15)] hover:scale-105"
            >
                <h1 class="mb-1 text-4xl font-extrabold animate-glow">{{ title }}</h1>
                <h2 class="text-center text-base p-4">{{ subtitle }}</h2>
            </div>
        </div>
        <div class="h-32 w-full bg-fade-bottom"></div>
    </div>
</template>