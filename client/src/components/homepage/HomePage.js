import React from 'react'
import SignupContainer from './SignupContainer';
// import LoginForm from '../login/LoginForm'

export default class HomePage extends React.Component {

  render() {
    return (
      <main>

        <div>
          <SignupContainer />
          {/* <LoginForm /> */}
        </div>
      </main>
    )
  }
}