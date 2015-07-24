'use strict';
var path = require('path');

module.exports = {
    entry:  './main',
    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: '[name].bundle.js',
    }
};