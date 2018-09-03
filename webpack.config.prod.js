const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        plugins: [
            new DirectoryNamedWebpackPlugin()
        ]
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(config),
        new DirectoryNamedWebpackPlugin(),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};