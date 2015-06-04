var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './project/app/bootstrap/app.js',
    output: {
        path: './project/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css')},
            {test: /\.(jpg|png|gif|eot|woff|ttf|svg)$/, loader: 'file'}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components', 'project'],
        alias: {
            'angular': 'angular/angular.js',
            'angular-ui-router': 'angular-ui-router/release/angular-ui-router.min.js',
            'angular-touch': 'angular-touch/angular-touch.min.js',
            'slideout': 'slideout/index.js'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new Webpack.ProvidePlugin({
            Slideout: 'slideout'
        })
    ]
};