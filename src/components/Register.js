import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
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
		console.log('Uspješno ste se registrirali');
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Registracija</h2>
					<div className="ime">
						<input
							type="text"
							placeholder="Nadimak"
							name="nadimak"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="E-mail"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Lozinka"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Potvrdite lozinku" name="password1" />
					</div>

					<input type="submit" value="Registracija" class="button" />
				</form>

				<Link to="/" class="link">Prijavite se</Link>
				
			</div>
		);
	}
}

export default Register;
