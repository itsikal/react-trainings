const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const config = require('./template.config');

module.exports = {
    entry: {
        app: './src/app.jsx',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        plugins: [
            new DirectoryNamedWebpackPlugin()
        ]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(config)
    ],
    devServer: {
        contentBase: './dist'
    }
};