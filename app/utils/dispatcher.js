var Dispatcher = require("flux").Dispatcher;
var appDisptacher = new Dispatcher();

appDisptacher.handleAction = function(action){
	this.dispatch({
		source: 'VIEW_ACTION',
		action: action
	});
};

module.exports = appDisptacher;