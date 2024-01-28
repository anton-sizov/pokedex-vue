import { PokemonEvolutionStep } from './pokemon-evolution-step.interface';
import { PokemonStat } from './pokemon-stat.interface';
import { PokemonType } from './pokemon-type.interface';

export interface PokemonDetails {
    id: number;
    name: string;
    genera: string;
    types: PokemonType[];
    weight: number;
    height: number;
    stats: PokemonStat[];
    capture_rate: number;
    base_happiness: number;
    growth_rate: {
        name: string;
        url: string;
    },
    habitat: {
        name: string;
        url: string;
    }
    description: string;
    evolutionChain: {
        chain: PokemonEvolutionStep
    },
}
