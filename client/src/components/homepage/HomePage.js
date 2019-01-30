import React from 'react'
import { connect } from 'react-redux'
import { loadImage } from '../../actions/events'
import SignupContainer from './SignupContainer'
import LoginContainer from './LoginContainer'
import '../../styles/home.css'

class HomePage extends React.Component {

  componentDidMount() {
    this.props.loadImage()
  }


  render() {
    return (
      <main className="home-container">
        <div className="imgbox">
        <img className="home-background" src={this.props.image} />
        </div>
        <div className="login-signup">
          <SignupContainer />
          <LoginContainer />
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.image
  }
}

export default connect(mapStateToProps, { loadImage })(HomePage)