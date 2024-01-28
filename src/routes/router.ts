import PokemonsPageVue from '@/pages/PokemonsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/pokedex-vue/',
            name: 'pokemons',
            component: PokemonsPageVue,
        },
        {
            path: '/pokedex-vue/pokemon/:id',
            name: 'pokemon',
            component: () => import('@pages/PokemonPage.vue'),
        },
    ],
});

export default router;
