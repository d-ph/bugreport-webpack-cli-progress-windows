let path = require('path');
let webpack = require('webpack');
let TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

let sourceRootDirectory = path.resolve('src');

let webpackConfig = {
    entry: {
        'main': sourceRootDirectory + '/main.ts'
    },

    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
    },

    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader', include: sourceRootDirectory }
        ]
    },

    performance: {
        hints: false
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
    ]
};

module.exports = webpackConfig;
