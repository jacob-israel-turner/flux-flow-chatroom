var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Main = React.createClass({

	render: function() {
		return (
			<div>
				<div className='header'>
					<h1 id='brand'><Link to='lobby'>Flow</Link></h1>
				</div>
				<RouteHandler />
			</div>
		);
	}

});

module.exports = Main;