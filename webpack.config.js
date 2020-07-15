const path = require('path')
const fs = require('fs')
const HTNLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const PAGES_DIR = path.resolve(__dirname, 'src/pages/')
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'))

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode:'development',
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTNLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            }
        ]
    }
}