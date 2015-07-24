'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  {
        // main: './main.js'
        main: ['webpack/hot/dev-server', './main.js']
    },
    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: '[name].bundle.js',
    },
     module: {
        loaders: [
         { test: /\.css$/, loader: 'style!css' },
         { test: /\.gif$/, loader: 'url?mimetype=image/gif&limit=10000&name=../../build/pic/[name].gif' },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};