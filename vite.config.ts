import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(() => ({
    base: '/pokedex-vue/',
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
        VitePWA({ injectRegister: 'auto' }),
      
    ],
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
