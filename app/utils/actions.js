var appDispatcher = require('utils/dispatcher');
var constants = require('utils/constants');
var fbUtils = require('utils/fb-utils');
var ref = require('utils/fb-utils').homeRef.child('rooms');

var actions = {
	updateUser: function(user){
		appDispatcher.handleAction({
			actionType: constants.UPDATE_USER,
			data: user
		});
	},
	updateMessages: function(messages){
		appDispatcher.handleAction({
			actionType: constants.UPDATE_MESSAGES,
			data: fbUtils.messagesToArray(messages)
		})
	},
	addMessage: function(name, message){
		ref.child(name).push(message);
	},
	handleFBMessageUpdate: function(snapshot){
		this.updateMessages(snapshot.val());
	},
	createRoomListener: function(name){
		ref.child(name).on('value', this.handleFBMessageUpdate, this);
	},
	removeRoomListener: function(name){
		ref.child(name).off('value', this.handleFBMessageUpdate, this);
	},
	checkUserState: function(){
		this.updateUser(ref.getAuth());
	},
	logout: function(){
		ref.unauth();
		this.checkUserState();
	}
};

module.exports = actions;