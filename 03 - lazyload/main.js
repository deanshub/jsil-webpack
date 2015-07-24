'use strict';

require('./ironmanStyle.css');
var $ = require('jquery');

$('#addSys').click(function(){
	require([],function() {
		var targetingSystem = require('./targetingSystem');
		$('body').append(targetingSystem.activate());
	});
});
