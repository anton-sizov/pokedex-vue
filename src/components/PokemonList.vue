<template>
    <div class="pokemon-list">
        <PokemonCard v-for="pokemon in list" :key="pokemon.name" :pokemon="pokemon"/>
    </div>
</template>

<script setup lang="ts">
import PokemonCard from '@components/PokemonCard.vue';
import { usePokemonStore } from '@stores/PokemonStore';
import { storeToRefs } from 'pinia';

const store = usePokemonStore();

const { list } = storeToRefs(store);
</script>

<style lang="scss" scoped>
    .pokemon-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem 1rem;
    }
</style>