import React from 'react'
import { connect } from 'react-redux'
import { loadEventsHomePage } from '../../actions/events'
import SignupContainer from './SignupContainer'
import LoginContainer from './LoginContainer'
import Carousel from './Carousel'
import '../../styles/home.css'

class HomePage extends React.Component {

  componentDidMount() {
    this.props.loadEventsHomePage()
  }


  render() {
    console.log('=========>', this.props)
    return (
      <main className="home-container">
        <Carousel events={this.props.events} />
        <div className="login-signup">
          <SignupContainer />
          <LoginContainer />
        </div>
      </main>

    )
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEventsHomePage })(HomePage)