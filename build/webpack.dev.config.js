/**
 * create by daixingwang811 on 2018/06/08 
 */
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

//获取项目公共配置
const configProject = require('../config/config.default');

const port = process.env['PORT'] || 3112;
const host = "localhost";

let apiServer = configProject.apiServer || {
  host: "localhost",
  port: "7001"
}

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: '#source-map',     // 生成source-map文件
    output: {
        publicPath: `http://${host}:${port}/`,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../app/webroot/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
            },
            cache: false,
            config: configProject
        })
    ],
    devServer: {
        host,
        compress: true,
        port,
        open: true,
        hot: true,
        proxy: {
            '/api/*': {
                target: `http://${apiServer.host}:${apiServer.port}/`,
                changeOrigin: true,
                secure: false
            }
        }
    }
})
