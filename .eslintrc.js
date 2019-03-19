module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    rules: {
        quotes: ['error', 'single', {avoidEscape: true}],
        'comma-dangle': ['error', 'always-multiline'],
    },
    env: {
        node: true
    }
};