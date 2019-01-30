import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'

class LoginContainer extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
    console.log(this.props)
		// if (this.props.currentUser) return (
		// 	<Redirect to="/events" />
		// )

		return (
			<div>
				<LoginForm onSubmit={this.handleSubmit} />

        { this.props.login.error && 
          <span style={{color:'red'}}>{this.props.login.error}</span> }
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	console.log(state)
	return {
		currentUser: state.currentUser,
		login: state.login,
    // error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginContainer)