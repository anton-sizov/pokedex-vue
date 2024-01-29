<template>
  <header>
    <div class="header-content">
      <router-link to="/pokedex-vue">Pokedex</router-link>
    </div>
  </header>
  <main>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { usePokemonStore } from '@stores/PokemonStore';

const store = usePokemonStore();

onBeforeMount(() => {
    store.loadPokemons();
});
</script>

<style scoped></style>
