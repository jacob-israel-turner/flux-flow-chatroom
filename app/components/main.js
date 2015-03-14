var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Chat Room!</h1>
				<RouteHandler />
			</div>
		);
	}

});

module.exports = Main;