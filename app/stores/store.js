var React = require('react');
var Flux = require('flux');
var Emitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');
var constants = require('utils/constants');
var CHANGE_EVENT = 'change';
var AppDispatcher = require('utils/dispatcher');


var _store = {
	user: null,
	messages: []
};

var updateUser = function(user){
	_store.user = user;
	store.emit(CHANGE_EVENT);
};

var updateMessages = function(messages){
	_store.messages = messages;
	store.emit(CHANGE_EVENT);
};

var store = objectAssign({}, Emitter.prototype, {
	addChangeListener: function(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},
	getUser: function(){
		return _store.user;
	},
	getMessages: function(){
		return _store.messages;
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch (action.actionType) {
		case constants.UPDATE_USER : 
			updateUser(action.data);
			break;
		case constants.UPDATE_MESSAGES :
		 updateMessages(action.data);
		 break;
		default :
			return true;
	}
})



module.exports = store;