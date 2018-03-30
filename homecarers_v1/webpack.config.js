const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack');
const dev = process.env.NODE_ENV === "dev";

let config = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('dist'),
        filename: dev ? 'index.js' : 'index.js',
        publicPath: ''
    },
    resolve: {
        alias: {
            '@css': path.resolve('src/css'),
            '@img': path.resolve('src/img'),
            '@temp': path.resolve('src/components/templates'),
            '@pages': path.resolve('src/components/pages'),
            '@form': path.resolve('src/components/forms'),
            '@mpages': path.resolve('src/components/pagesMobile'),
            '@': path.resolve('src')
        }
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'public'),
        compress: true, // enable gzip compression
        historyApiFallback: {
            disableDotRule: true
        }
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.(js)$/,
            //     exclude: '/node_modules',
            //     use: ['eslint-loader']
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015","react"]
                  }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }))
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: ''
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:7].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     PRODUCTION: JSON.stringify(true),
        // }),
        new ExtractTextPlugin("styles.css"),
    ]
};

if (!dev) {
    config.plugins.push(new UglifyJSPlugin({
        sourceMap: false
    }));
    config.plugins.push(new HtmlWebpackPlugin({
        title: 'Homecarers',
        template: 'public/index.html'
    }));
    config.plugins.push(new ManifestPlugin());
    config.plugins.push(new CleanWebpackPlugin(['dist'])), {
        root: path.resolve('./'),
        verbose: true,
        dry: false
    }
}

module.exports = config;