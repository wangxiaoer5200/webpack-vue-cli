
const common = require('./webpack.common')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash:8].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: __dirname + '/public/favicon.ico',
                to: __dirname + '/dist'
            }]
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('product')
        })
    ]
})
