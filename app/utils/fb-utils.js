var homeURL = require('utils/constants').fbURL;
var Firebase = require('firebase');
var homeRef = new Firebase(homeURL);

var roomsToArray = function(obj){
	var arr = [];
	for (var key in obj){
		arr.push({ name: key })
	}
	return arr;
};

var messagesToArray = function(obj){
	var arr = [];
	for (var key in obj){
		arr.push({ text: obj[key] })
	}
	return arr;
};


var firebaseUtil = {
	homeRef: homeRef,
	roomsToArray: roomsToArray,
	messagesToArray: messagesToArray
}

module.exports = firebaseUtil;