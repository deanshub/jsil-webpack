'use strict';

require('./ironmanStyle.css');
var $ = require('jquery');
$('#ironman').attr('src', require('./ironman.gif'));
// $('body').append($('<h1>hi i\'m dean</h1>'));
var targetingSys = require('./targetingSystem');
targetingSys.activate();