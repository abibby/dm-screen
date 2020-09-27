//@ts-check

const { build } = require('@zwzn/build')
const { join } = require('path')

module.exports = async (env, argv) => {
    const config = await build({
        entry: join(__dirname, 'src/app.tsx'),
        html: join(__dirname, 'src/index.html'),
        moduleBase: join(__dirname, 'src'),
        dist: join(__dirname, 'dist'),
        // publicPath:'',
    })(env, argv)

    if (!config.resolve) config.resolve = {}
    if (!config.resolve.alias) config.resolve.alias = {}

    config.resolve.alias = {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        ...config.resolve.alias,
    }

    return config
}
