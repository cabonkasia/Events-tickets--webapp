import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

class SignupContainer extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.email, data.password)
	}

	render() {
		console.log(this.props)
		if (this.props.signup.success) return (
			<Redirect to="/" />
		)
		return (
			<div>
				<SignupForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signup.error }</p>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupContainer)