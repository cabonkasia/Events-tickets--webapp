import React, { PureComponent } from 'react'
import '../../styles/login.css'

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
				<form onSubmit={this.handleSubmit}>
					<button className="button login" type="submit">Log in</button>
					<label>
						Email
            <input type="email" name="email" value={
							this.state.email || ''
						} onChange={this.handleChange} />
					</label>

					<label>
						Password
            <input type="password" name="password" value={
							this.state.password || ''
						} onChange={this.handleChange} />
					</label>

				</form>
			</div>)
	}
}