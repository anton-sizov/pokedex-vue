<template>
    <div class="card">
        <img :src="imagePath" :alt="props.pokemon.name">

        <div class="description">
            <h3>{{ props.pokemon.name }}</h3>
            <h5>{{ props.pokemon.genera }}</h5>
            <div class="params">
                <div class="height info-block">
                    <small>Height</small>
                    {{ height }}
                </div>
                <div class="weight info-block">
                    <small>Weight</small>
                    {{ weight }}
                </div>
                <div class="types">
                    <v-chip v-for="type in props.pokemon.types" :key="type.type.name" variant="outlined">
                        {{ type.type.name }}
                    </v-chip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PokemonDetails } from '../interfaces/pokemon-details.interface';

const props = defineProps<{ pokemon: PokemonDetails }>();
const imagePath = computed(() => import.meta.env.VITE_ASSETS_URL + props.pokemon.id + '.svg');
const weight = computed(() => `${(props.pokemon.weight/10).toFixed(1)}Kg`);
const height = computed(() => `${(props.pokemon.height*0.0254).toFixed(2)}m`);
</script>

<style scoped lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        gap: var(--card-gap);
        padding: var(--card-gap);
    }

    img {
        max-width: 150px;
        margin: 0 auto;
    }

    h3 {
        text-transform: capitalize;
    }

    h5 {
        color: var(--secondary-color);
    }

    .description {
        margin: 0 auto;
        text-align: center;
    }

    .params {
        display: grid;
        grid-template-areas:
            "types types"
            "height weight";
        gap: calc(var(--card-gap) / 2);
        margin-top: var(--card-gap);
    }

    .height {
        grid-area: height;
    }

    .weight {
        grid-area: weight;
    }

    .types {
        display: flex;
        justify-content: center;
        gap: calc(var(--card-gap) / 2);
        grid-area: types;
    }

    @media only screen and (min-width: 640px) {
        img {
            max-width: 250px;
        }

        .description {
            margin: unset;
        }

        .params {
            grid-template-areas: "height types weight";
        }
    }
</style>