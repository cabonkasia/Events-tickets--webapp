import React from 'react'
import {loadTicket} from '../actions/ticket'
import {connect} from 'react-redux'
import Ticket from './Ticket'


class TicketContainer extends React.Component {
  // componentDidMount() {
  //   this.props.loadTicket(Number(this.props.match.params.id))
  //   console.log(this.props)
  // }

  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.id), /*ticketId*/Number(this.props.match.params.id))
    // this.props.loadTicket(Number(this.props.match.params.id), /*ticketId*/Number(this.props.match.event.tickets.find(ticket => ticket.event_id === Number(this.props.match.params.id))))

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