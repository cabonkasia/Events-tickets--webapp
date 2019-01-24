import React from 'react'
import {loadEvent} from '../../actions/events'
import {connect} from 'react-redux'
import TicketsList from './TicketsList'
import CreateTicketForm from './CreateTicketForm'

class TicketsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
    console.log(this.props)
  }

  render() {
    return <div>
          <TicketsList 
          event={this.props.event}
          />
          <CreateTicketForm/>
          </div>
  }
}

const mapStateToProps = state => ({
  event: state.event

})

export default connect(mapStateToProps, {loadEvent})(TicketsListContainer)