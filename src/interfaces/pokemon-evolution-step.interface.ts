export interface PokemonEvolutionStep {
    species: {
        name: string;
        url: string;
    }
    evolves_to: PokemonEvolutionStep[],
}
