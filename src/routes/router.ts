import PokemonsPageVue from '@/pages/PokemonsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'pokemons',
            component: PokemonsPageVue,
        },
        {
            path: '/pokemon/:id',
            name: 'pokemon',
            component: () => import('@pages/PokemonPage.vue'),
        },
    ],
});

export default router;
