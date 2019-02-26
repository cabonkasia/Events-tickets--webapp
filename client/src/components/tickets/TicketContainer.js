import React from 'react'
import {loadTicket} from '../../actions/ticket'
import { loadRisk } from '../../actions/risk'
import {connect} from 'react-redux'
import Ticket from './Ticket'
// import EventDetails from './EventDetails'


class TicketContainer extends React.Component {

  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.event_id), Number(this.props.match.params.ticket_id));
    this.props.loadRisk(Number(this.props.match.params.event_id), Number(this.props.match.params.ticket_id))

    console.log(this.props.match.params)
  }
  render() {
    return <div>
          {/* <EventDetails
          event={this.props.event}
          params={this.props.match.params} /> */}
          <Ticket 
          event={this.props.event}
          params={this.props.match.params}
          risk={this.props.risk} />
          </div>
  }
}

const mapStateToProps = state => ({
  // ticket: state.ticket,
  // <-------------->
  event: state.event,
  risk: state.risk
  // <-------------->

})

export default connect(mapStateToProps, {loadTicket, loadRisk})(TicketContainer)