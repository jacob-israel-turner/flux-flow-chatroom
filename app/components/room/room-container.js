var React = require('react');
var Router = require('react-router');

var RoomContainer = React.createClass({
	mixins: [Router.State],

	render: function() {
		return (
			<div>
				<h1>Welcome to {this.getParams().roomId}</h1>
			</div>
		);
	}

});

module.exports = RoomContainer;