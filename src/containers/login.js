import React from 'react';
import { AuthService } from '../services/AuthService';

export class Login extends React.Component {
	login() {
		var email = this.refs.email.value
		var password = this.refs.password.value
		AuthService.login(email, password).then(token => {
			location.href= '/'
		})
	}

	render() {
		return (
			<div className="container">
				<h1>Login</h1>
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
					<button className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
				</div>
			</div>
		);
	}
}
