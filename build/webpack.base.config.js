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
        main: ['babel-polyfill', '@/main'],
        'vender-base': '@/vendors/vendors.base.js',
        'vender-exten': '@/vendors/vendors.exten.js'
    },
    output: {
        path: path.resolve(__dirname, '../app/webroot/dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders:{
                        html: 'babel-loader'
                    }
                },

            },{
                test: /iview\/.*?js$/,
                loader: 'happypack/loader?id=happybabel',
                exclude: /node_modules/
            },{
                test: /\.js$/,
                loader: 'happypack/loader?id=happybabel',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize','autoprefixer-loader'],
                    fallback: 'style-loader'
                })
            },{
                test:/\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize','autoprefixer-loader','less-loader'],
                    fallback: 'style-loader'
                })
            },{
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },{
                test:/\.(html|xhtml|tpl)$/,
                loader: 'html-loader'
            },{
                test:/\.ejs$/,
                loader: 'ejs-loader'
            },{
                test: /iview.src.*?js$/,
                loader: 'babel-loader'
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                include: /toolbox/
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: true
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('../app/pages'),
            '@mock': resolve('../mock'),
            "iview": "@zbj/iview"
        }
    }
}
