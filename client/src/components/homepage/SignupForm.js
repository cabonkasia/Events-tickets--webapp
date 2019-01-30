import React, { PureComponent } from 'react'
import '../../styles/home.css'


export default class SignupForm extends PureComponent {
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
		return (
			<div className="signup-form">
				<form onSubmit={this.handleSubmit} className="form-el">
					<button className="button signup" type="submit">Sign up</button>
					<label>
						Email
					</label>
					<input type="email" name="email" value={
						this.state.email || ''
					} onChange={this.handleChange} />


					<label>
						Password
					</label>
					<input type="password" name="password" value={
						this.state.password || ''
					} onChange={this.handleChange} />


					<label>
						Confirm password
					</label>
					<input type="password" name="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={this.handleChange} />


					{
						this.state.password &&
						this.state.confirmPassword &&
						this.state.password !== this.state.confirmPassword &&
						<p style={{ color: 'red' }}>The passwords do not match!</p>
					}
				</form>
			</div>
		)
	}
}