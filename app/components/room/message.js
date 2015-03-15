var React = require('react');

var Messages = React.createClass({

	render: function() {
		return (
			<div className='container full-width flex--align-start'>
				{this.props.message.text}
			</div>
		);
	}

});

module.exports = Messages;