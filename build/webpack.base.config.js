const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');

var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        main: ['babel-polyfill', '@/app']
    },
    output: {
        path: path.resolve(__dirname, '../app/public')
    },
    optimization:{
        splitChunks: {              //默认自动分包，详情参考【https://webpack.js.org/plugins/split-chunks-plugin/#src/components/Sidebar/Sidebar.jsx】
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: "happypack/loader?id=happybabel"
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize','postcss-loader'],
                    fallback: 'style-loader'
                })
            },{
                test:/\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize','postcss-loader','less-loader'],
                    fallback: 'style-loader'
                })
            },{
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[path][name].[hash:8].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },{
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1024,
                    name: '[path][name].[hash:8].[ext]',
                    outputPath: 'fonts/'
                }
            },{
                test:/\.(html|xhtml|tpl)$/,
                loader: 'html-loader'
            },{
                test:/\.ejs$/,
                loader: 'ejs-loader'
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': resolve('../app/webroot'),
            '@mock': resolve('../mock'),
        }
    }
}
