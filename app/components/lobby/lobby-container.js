var React = require('react');
var fbUtils = require('utils/fb-utils');
var RoomPreview = require('components/lobby/room-preview');
var NewRoom = require('components/lobby/new-room');
var Router = require('react-router');

var LobbyContainer = React.createClass({
	mixins: [Router.Navigation],
	getInitialState: function() {
		return {
			rooms: [],
			isOpen: false
		};
	},
	componentDidMount: function() {
		fbUtils.homeRef.child('rooms').on('value', this.handleUpdate, this);
	},
	handleUpdate: function(snapshot){
		this.setState({
			rooms: snapshot.val()
		});
	},
	handleOpen: function(){
		this.setState({
			isOpen: !this.state.isOpen
		})
	},
	handleSubmitNewRoom: function(name){
		fbUtils.homeRef.child('rooms').child(name).push('Room created.');
		this.transitionTo('room', {roomId: name});
	},
	render: function(){
		var rooms = fbUtils.roomsToArray(this.state.rooms);
		rooms = rooms.map(function(item, index){
			return <RoomPreview key={index} name={item.name} />
		}, this)
		return (
			<div className='container flex flex-column flex--align-center'>
				<h1>Lobby!</h1>
				<div className='flex flex--space-between full-width'>
					{ this.state.isOpen ? <NewRoom cb={ this.handleSubmitNewRoom } /> : '' }
					<button onClick={ this.handleOpen }>{this.state.isOpen ? 'Cancel' : 'New Room'}</button>
				</div>
				{rooms}
			</div>
		)
	},
	componentWillUnmount: function() {
		fbUtils.homeRef.child('rooms').off("value", this.handleUpdate, this);
	},
});

module.exports = LobbyContainer;