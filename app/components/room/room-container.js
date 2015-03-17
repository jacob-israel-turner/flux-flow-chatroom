var React = require('react');
var Router = require('react-router');
var store = require('stores/store');
var actions = require('utils/actions')


var NewChat = require('components/room/new-chat');
var Message = require('components/room/message');

var RoomContainer = React.createClass({
	mixins: [Router.State],
	getInitialState: function() {
		return {
			messages: [],
			name: this.getParams().roomId 
		};
	},
	componentDidMount: function() {
		actions.createRoomListener(this.state.name);
		store.addChangeListener(this._onChange);
	},
	render: function() {
		var Messages = this.state.messages.map(function(item, index){
			return <Message key={index} message={item} />
		})
		return (
			<div className='container flex flex-column flex--align-center'>
				<h1>Welcome to {this.state.name}</h1>
				<NewChat cb={this.handleSubmit} />
				{ Messages.reverse() }
			</div>
		);
	},
	componentWillUnmount: function() {
		actions.removeRoomListener(this.state.name)
		store.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState({
			messages: store.getMessages()
		})
	},
	handleSubmit: function(message){
		actions.addMessage(this.state.name, message);
	},
});


module.exports = RoomContainer;