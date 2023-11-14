import react from '@vitejs/plugin-react'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
    },
}

export default config
