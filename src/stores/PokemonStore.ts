import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

import { PokemonItem } from '@/interfaces/pokemon-item.interface';
import { PokemonDetails } from '../interfaces/pokemon-details.interface';

export const usePokemonStore = defineStore('PokemonStore', () => {
    const list = ref<PokemonItem[]>([]);
    const pagination = ref({ page: 0, size: 30 });
    const total = ref(0);
    const details = ref<PokemonDetails>({} as PokemonDetails);

    function loadPokemons() {
        axios.get(`pokemon/?limit=${pagination.value.size}&offset=0`).then(({ data }) => {
            list.value = data.results;
            total.value = data.count;
        });
    }

    function loadMorePokemons() {
        pagination.value = {
            ...pagination.value,
            page: pagination.value.page + 1,
        };
        const offset = pagination.value.page * pagination.value.size;
        axios.get(`pokemon/?limit=${pagination.value.size}&offset=${offset}`).then(({ data }) => {
            list.value = [
                ...list.value,
                ...data.results,
            ];
            total.value = data.count;
        });
    }

    function loadPokemonDetails(name: string) {
        axios.all([
            axios.get(`pokemon/${name}`),
            axios.get(`pokemon-species/${name}/`),
        ]).then(([detailsResponse, speciesResponse]) => {
            details.value = formatPokemonDetails({
                details: detailsResponse.data,
                species: speciesResponse.data,
            });
        });
    }

    function formatPokemonDetails(data: any) {
        const uniqueEntries: string[] = [];

        data.species.flavor_text_entries
            .filter((entry: { language: { name: string; }; }) => entry.language.name === 'en')
            .forEach((textEntry: { flavor_text: string; }) => {
                if (uniqueEntries.indexOf(textEntry.flavor_text) === -1) {
                    uniqueEntries.push(textEntry.flavor_text);
                }
            });

        const genera = data.species.genera.find((entry: { language: { name: string; }; }) => {
            return entry.language.name === 'en';
        })?.genus;

        return {
            id: data.details.id,
            name: data.details.name,
            genera,
            types: data.details.types,
            weight: data.details.weight,
            height: data.details.height,
            stats: data.details.stats,
            capture_rate: data.species.capture_rate,
            base_happiness: data.species.base_happiness,
            habitat: data.species.habitat,
            growth_rate: data.species.growth_rate,
            description: uniqueEntries.join(' '),
            evolutionChain: data.evolutionChain,
        };
    }

    return { list, total, pagination, details, loadPokemons, loadMorePokemons, loadPokemonDetails };
});

