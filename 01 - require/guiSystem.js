'use strict';
var targetingSys = require('./targetingSystem');
module.exports = {
	getTargetingSystem: function() {
		targetingSys.activate();
	}
};