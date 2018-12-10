import React from 'react'
import {loadTicket} from '../actions/ticket'
import {connect} from 'react-redux'
import Ticket from './Ticket'


class TicketContainer extends React.Component {

  componentDidMount() {
    this.props.loadTicket(/*this.props.event.id*/Number(this.props.match.params.id), /*ticketId*/Number(this.props.match.params.ticket_id))

    console.log(this.props.match.params)
  }
  render() {
    return <div>
          <Ticket 
          // ticket={this.props.ticket}
          event={this.props.event}
          params={this.props.match.params} />
          </div>
  }
}

const mapStateToProps = state => ({
  // ticket: state.ticket,
  // <-------------->
  event: state.event
  // <-------------->

})

export default connect(mapStateToProps, {loadTicket})(TicketContainer)