const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    entry: {
        styles: ['./sass/app.scss'],
        material: ['./js/material.js'],
        app: './js/application.js',
    },
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: './js/jquery-2.1.0.min.js'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules']
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                exclude: '/node_modules/'
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    }
}];