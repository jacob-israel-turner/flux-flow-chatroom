var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var ref = require('utils/fb-utils').homeRef;
var actions = require('utils/actions');
var store = require('stores/store');

var Main = React.createClass({
	getInitialState: function() {
		return {
			user: ''
		};
	},
	handleLogin: function(e){
		e.preventDefault();
		ref.authWithOAuthPopup('google', function(err, authData){
			if(err) console.log(err);
			else actions.checkUserState();
		}.bind(this))
	},
	handleLogout: function(e){
		e.preventDefault();
		actions.logout();
	},
	_onChange: function(){
		this.setState({
			user: store.getUser()
		})
	},
	componentDidMount: function() {
		store.addChangeListener(this._onChange)
		actions.checkUserState();
	},
	render: function() {
		var Login = <a href='' onClick={this.handleLogin}>Login</a>;
		var Logout = <a href='' onClick={this.handleLogout}>Logout</a>;
		return (
			<div>
				<div className='header flex flex--space-between'>
					<h1 id='brand'><Link to='lobby'>Flow</Link></h1>
					{ this.state.user ? Logout : Login }
				</div>
				<RouteHandler />
			</div>
		);
	}

});

module.exports = Main;