var React = require('react');
var Router = require('react-router');
var Route = Router.Route;


var Main = require('components/main');
var Lobby = require('components/lobby/lobby-container');
var Room = require('components/room/room-container');

var routes = (
	<Route handler={Main}>
		<Route name='lobby' path='/' handler={Lobby} />
		<Route name='room' path='/:roomId' handler={Room} />
	</Route>
	);

module.exports = routes