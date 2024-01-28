<template>
    <router-link :to="{ name: 'pokemon', params: { id: pokemon.name }}">
        <article class="card">
            <img :src="imagePath" :alt="pokemon.name" width="128px" height="128px">
            <h3>{{ props.pokemon.name }}</h3>
        </article>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PokemonItem } from '@interfaces/pokemon-item.interface';

const props = defineProps<{ pokemon: PokemonItem }>();
const imagePath = computed(() => import.meta.env.VITE_ASSETS_URL + props.pokemon.url.split('/').filter(Boolean).pop() + '.svg');
</script>

<style lang="scss" scoped>
    article {
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-transform: capitalize;
        padding: 1rem;

        &:hover {
            background-color: var(--secondary-bg-color-hover);
        }
    }
</style>