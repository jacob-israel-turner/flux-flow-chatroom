var React = require('react');
var Link = require('react-router').Link;


var RoomPreview = React.createClass({

	render: function() {
		return (
			<div className='container full-width'>
				<h1><Link to='room' params={{roomId: this.props.name }}>{this.props.name}</Link></h1>
			</div>
		);
	}

});

module.exports = RoomPreview;