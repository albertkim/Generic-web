import React from 'react';

export class Register extends React.Component {
	register() {
		var email = this.refs.email.value;
		var password = this.refs.password.value;

		// TODO: Replace with custom functionality
		window.sessionStorage.email = email;
		window.sessionStorage.token = 'token';
		location.href= '/';
	}

	render() {
		return (
			<div className="container">
				<h1>Register</h1>
				<hr />

				<div className="col-md-6">
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" ref="email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" ref="password" />
					</div>
					<button className="btn btn-default" onClick={this.register.bind(this)}>Submit</button>
				</div>
			</div>
		);
	}
};
