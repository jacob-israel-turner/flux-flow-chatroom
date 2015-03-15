var React = require('react');

var NewRoom = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		this.props.cb(this.refs.newRoomName.getDOMNode().value);
	},
	componentDidMount: function() {
		this.refs.newRoomName.getDOMNode().focus();
	},
	render: function() {
		return (
			<form onSubmit={ this.handleSubmit } >
				<input type='text' ref='newRoomName' placeholder='Room Name' />
				<button>Create!</button>
			</form>
		);
	}

});

module.exports = NewRoom;

// this.props.cb.bind(null, this.refs.newRoomName.getDOMNode().value)