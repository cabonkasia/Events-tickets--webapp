import React from 'react'
import { connect } from 'react-redux'
import { loadImage } from '../../actions/events'
import SignupContainer from './SignupContainer'
import LoginContainer from './LoginContainer'

class HomePage extends React.Component {

  componentDidMount() {
    this.props.loadImage()
  }

  render() {
    return (
      <main className="background">
        <img src={this.props.image} />
        <div>
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