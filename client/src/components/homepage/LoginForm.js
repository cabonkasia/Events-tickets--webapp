import React, { PureComponent } from 'react'
import '../../styles/home.css'

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			[name]: value
		})
	}

	render() {
		console.log('login form')
		return (
			<div className="login-form">
				<form onSubmit={this.handleSubmit} className="form-el">
					<button className="button login" type="submit">Log in</button>

					<label className="email-margin">
						Email
					</label>
					<input type="email" name="email" value={
						this.state.email || ''
					} onChange={this.handleChange} />


					<label className="pass-margin">
						Password
					</label>
					<input type="password" name="password" value={
						this.state.password || ''
					} onChange={this.handleChange} />


				</form>
			</div>)
	}
}