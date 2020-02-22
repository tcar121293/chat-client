import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('Prijavljeni ste');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Prijava</h2>
					<div className="username">
						<input
							type="text"
							placeholder="E-mail"
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Lozinka"
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" class="button" />
				</form>

				<Link to="/register" class="link">Registrirajte se</Link>
				<div>
					<p class="jbg">Zaboravljena lozinka? Jbg... </p>
				</div>
			</div>
		);
	}
}

export default Login;
