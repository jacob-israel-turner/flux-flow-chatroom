var React = require('react');

var NewChat = React.createClass({
	componentDidMount: function() {
		this.refs.text.getDOMNode().focus();
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.props.cb(this.refs.text.getDOMNode().value);
		this.refs.text.getDOMNode().value = '';
	},
	render: function() {
		return (
			<form onSubmit={ this.handleSubmit } >
				<input type='text' ref='text' placeholder='New Message' />
				<button>Submit</button>
			</form>
		);
	}
});

module.exports = NewChat;