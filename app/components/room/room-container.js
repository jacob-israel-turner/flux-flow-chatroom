var React = require('react');
var Router = require('react-router');
var NewChat = require('components/room/new-chat');
var fbUtils = require('utils/fb-utils');
var ref = fbUtils.homeRef.child('rooms');

var RoomContainer = React.createClass({
	mixins: [Router.State],
	getInitialState: function() {
		return {
			messages: [],
			name: this.getParams().roomId 
		};
	},
	componentDidMount: function() {
		ref.child(this.state.name).on('value', this.handleUpdate, this)
	},
	handleUpdate: function (snapshot){
		var messages = fbUtils.messagesToArray(snapshot.val())
		this.setState({
			messages: messages
		}, function(){
			console.log(this.state);
		})
	}, 
	render: function() {
		return (
			<div className='container flex flex-column flex--align-center'>
				<h1>Welcome to {this.state.name}</h1>
				<NewChat />
			</div>
		);
	},
	componentWillUnmount: function() {
		ref.child(this.state.name).off('value', this.handleUpdate, this)
	},

});


module.exports = RoomContainer;