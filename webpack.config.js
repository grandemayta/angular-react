var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './project/app/core/bootstrap.js',
    output: {
        path: './project/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass'), exclude: /node_modules/},
            {test: /\.(jpg|png|gif|eot|woff|woff2|ttf|svg)$/, loader: 'file'}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components', 'project'],
        alias: {
            'angular': 'angular/angular.js',
            'angular-ui-router': 'angular-ui-router/release/angular-ui-router.js',
            'angular-touch': 'angular-touch/angular-touch.js',
            'oclazyload': 'oclazyload/dist/oclazyload.js',
            'snap': 'lib/snap.js',
            'velocity': 'lib/velocity.js',
            'hammerjs': 'lib/hammer.js'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new Webpack.ProvidePlugin({
            Snap: 'snap',
            Velocity: 'velocity',
            Hammer: 'hammerjs'
        })
    ]
};