const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const webpack = require('webpack');
const dev = process.env.NODE_ENV === "dev";

let config = {
    entry: path.resolve('front/src/index.js'),
    output: {
        path: path.resolve('front/dist'),
        filename: dev ? 'index.js' : 'index.js',
        publicPath: ''
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            '@img': path.resolve('front/src/img'),
            '@css': path.resolve('front/src/css'),
            '@msg': path.resolve('front/src/messages'),
            '@script': path.resolve('front/src/script'),
            '@temp': path.resolve('front/src/components/templates'),
            '@pages': path.resolve('front/src/components/pages'),
            '@form': path.resolve('front/src/components/forms'),
            '@mpages': path.resolve('front/src/components/pagesMobile'),
            '@': path.resolve('front/src')
        }
    },
    devServer: {
        port: process.env.PORT || 3000,
        inline: true,
        contentBase: path.join(__dirname, 'front/public'),
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
                    name: "[name].[hash:7].[ext]",
                    publicPath: ''
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },
        ]
    },
    devtool:'cheap-module-source-map',
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
        new ExtractTextPlugin("styles.css"),
    ]
};
if (!dev) {
    config.plugins.push(new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i
    }));
    config.plugins.push(new UglifyJSPlugin({
        sourceMap: false
    }));
    config.plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }));
    config.plugins.push(new webpack.optimize.AggressiveMergingPlugin({
    }));
    config.plugins.push(new HtmlWebpackPlugin({
        title: 'Homecarers',
        template: 'front/public/index.html'
    }));
    config.plugins.push(new OptimizeCssAssetsPlugin());
    config.plugins.push(new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.jsx$|\.css$|\.html$/,
            threshold: 0,
            minRatio: 0.8
        }));
    config.plugins.push(new ManifestPlugin());
    config.plugins.push(new CleanWebpackPlugin(['dist'])), {
        root: path.resolve('./'),
        verbose: true,
        dry: false
    }
}

module.exports = config;