<template>
    <PokemonList />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import PokemonList from '@components/PokemonList.vue';
import { usePokemonStore } from '@stores/PokemonStore';

const store = usePokemonStore();

onBeforeMount(() => {
    store.loadPokemons();
}); 
</script>

<style scoped></style>
