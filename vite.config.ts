import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig(() => ({
    base: '/pokedex-vue/',
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
    ],
    // build: {
    //     rollupOptions: {
    //         output: {

    //         },
    //     },      
    // },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@stores': path.resolve(__dirname, 'src/stores'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
        },
    },
}));
