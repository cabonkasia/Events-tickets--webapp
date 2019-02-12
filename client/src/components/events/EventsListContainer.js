import React from 'react'
import {loadEvents} from '../../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'
import CreateEventForm from './CreateEventForm'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }


  render() {
    // console.log('###########', this.props.events)
    return <div>
          <EventsList events={this.props.events} />
          <CreateEventForm />
          </div>
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)