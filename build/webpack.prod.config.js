const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpackBaseConfig,{
    output:{
        publicPath: `/static/`,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js'
    },
    plugins: [
        new cleanWebpackPlugin(['app/dist/static/*'], {
            root: path.resolve(__dirname, '../'),
            exclude: ['README.md']
        }),
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../app/webroot/index.html'),
            filename: 'pac.html',
            minify: {
                collapseWhitespace: true,
            }
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            }
        })
    ]
})
