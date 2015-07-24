'use strict';
var path = require('path');

module.exports = {
    entry:  './main',
    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: '[name].bundle.js',
        publicPath: '/build/js/',
    },
     module: {
        loaders: [
         { test: /\.css$/, loader: 'style!css' },
         { test: /\.gif$/, loader: 'url?mimetype=image/gif&limit=10000&name=../../build/pic/[name].gif' },
        ]
    }
};