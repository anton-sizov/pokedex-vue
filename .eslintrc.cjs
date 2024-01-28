module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
        '@vue/eslint-config-typescript',
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'vue/require-default-prop': 'off',
    },
};
