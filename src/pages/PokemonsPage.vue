<template>
    <PokemonList />
    <div v-if="showLoadMoreBtn" class="load-more">
        <v-btn variant="tonal" @click="loadMorePokemons()">
            Load more
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PokemonList from '@components/PokemonList.vue';
import { usePokemonStore } from '@stores/PokemonStore';

const store = usePokemonStore();
const showLoadMoreBtn = computed(() => store.list.length !== store.total);

function loadMorePokemons() {
    store.loadMorePokemons();
}
</script>

<style scoped>
    .load-more {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }

    button {
        width: 100%;
    }

    @media only screen and (min-width: 640px) {
        button {
            width: auto;
        }
    }
</style>
