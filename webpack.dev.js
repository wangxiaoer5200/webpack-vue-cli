
const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', // 检查错误
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})
