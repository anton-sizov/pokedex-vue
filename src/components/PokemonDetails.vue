<template>
    <div class="card">
        <div class="happiness info-block">
            <small>Happiness</small>
            <v-progress-circular
                v-if="showCharts"
                color="blue-darken-3"
                :model-value="props.pokemon.base_happiness"
                :size="128"
                :width="16"
            >
                {{ props.pokemon.base_happiness }}
            </v-progress-circular>
            <template v-else>
                {{ props.pokemon.base_happiness }}
            </template>
        </div>
        <div class="capture-rate info-block">
            <small>Capture rate</small>
            <v-progress-circular
                v-if="showCharts"
                color="red-darken-3"
                :model-value="props.pokemon.capture_rate"
                :size="128"
                :width="16"
            >
                {{ props.pokemon.capture_rate }}
            </v-progress-circular>
            <template v-else>
                {{ props.pokemon.capture_rate }}
            </template>
        </div>
        <div class="habitat info-block">
            <small>Habitat</small>
            {{ props.pokemon.habitat.name }}
        </div>
        <div class="growth-rate info-block">
            <small>Growth rate</small>
            {{ props.pokemon.growth_rate.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { PokemonDetails } from '../interfaces/pokemon-details.interface';

const props = defineProps<{ pokemon: PokemonDetails }>();
const windowWidth = ref(window.innerWidth);
const showCharts = computed(() => windowWidth.value >= 640);

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
    .card {
        display: grid;
        grid-template-areas:
            "happiness capture"
            "habitat growth";
        gap: var(--card-gap);
        padding: var(--card-gap);
        text-align: center;
    }

    .happiness {
        grid-area: happiness;
    }

    .capture-rate {
        grid-area: capture;
    }

    .habitat {
        grid-area: habitat;
    }

    .growth-rate {
        grid-area: growth;
    }

    .v-progress-circular {
        margin: 0 auto;
    }

    @media only screen and (min-width: 640px) {
        .card {    
            grid-template-areas:
                "happiness happiness"
                "capture capture"
                "habitat growth";
        }
    }
</style>