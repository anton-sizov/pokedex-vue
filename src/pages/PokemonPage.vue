<template>
    <v-progress-circular
        v-if="!details.id"
        indeterminate
        color="primary"
    ></v-progress-circular>
    
    <div v-else class="page">
        <PokemonBaseInfo :pokemon="details" class="base-info"/>
        <PokemonDetails :pokemon="details" class="details"/>
        <PokemonStats :pokemon="details" class="stats"/>
        <div class="description">
            {{ details.description }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePokemonStore } from '@stores/PokemonStore';
import PokemonBaseInfo from '@components/PokemonBaseInfo.vue';
import PokemonStats from '@components/PokemonStats.vue';
import PokemonDetails from '@components/PokemonDetails.vue';

const store = usePokemonStore();
const route = useRoute();
const { details } = storeToRefs(store);

onBeforeMount(() => store.loadPokemonDetails(route.params.id as string));
</script>

<style scoped>
    .page {
        display: grid;
        gap: 16px;
        grid-template-areas:
            "base-info"
            "details"
            "stats"
            "description";   
    }

    .base-info {
        grid-area: base-info;
    }

    .stats {
        grid-area: stats;
    }

    .details {
        grid-area: details;
    }

    .description {
        grid-area: description;
    }

    @media only screen and (min-width: 640px) {
        .page {
            grid-template-areas:
                "base-info details"
                "stats stats"
                "description description";   
        }
    }

    @media only screen and (min-width: 1024px) {
        .page {
            grid-template-areas:
                "base-info details stats"
                "description description description";
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
