<template>
    <div class="card">
        <Bar class="bar-vertical" :options="chartOptions" :data="chartData"/>
        <Bar class="bar-horizontal" :options="chartOptions" :data="chartDataY"/>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { PokemonDetails } from '../interfaces/pokemon-details.interface';

ChartJS.register(Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps<{ pokemon: PokemonDetails }>();
const windowWidth = ref(window.innerWidth);
const chartOptions = ref({ responsive: true });
const chartData = ref({
    labels: props.pokemon.stats.map(({ stat }) => stat.name),
    datasets: [{
        label: 'Stats',
        backgroundColor: '#f87979',
        data: props.pokemon.stats.map(({ base_stat }) => base_stat),
    }],
});
const chartDataY = ref({
    labels: props.pokemon.stats.map(({ stat }) => stat.name),
    datasets: [{
        label: 'Stats',
        backgroundColor: '#f87979',
        data: props.pokemon.stats.map(({ base_stat }) => base_stat),
        indexAxis: 'y',
    }],
});

const handleResize = () => {
    windowWidth.value = window.innerWidth;
    for (let id in ChartJS.instances) {
        ChartJS.instances[id].resize(0, 0);
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

</script>

<style lang="scss" scoped>
    .card {
        padding: var(--card-gap);
        position: relative;
    }

    .bar-horizontal {
        display: none !important;
    }

    @media only screen and (min-width: 1024px) {
        .bar-horizontal {
            display: block !important;
        }
        .bar-vertical {
            display: none !important;
        }
    }
</style>
