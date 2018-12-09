import React from 'react'
import {connect} from 'react-redux'
import {createTicket} from '../actions/ticket'
import CreateTicketForm from './CreateTicketForm'

class CreateTicketFormContainer extends React.Component {
  //state will keep whatever user puts in the input in form
  state = {
    description: '',
    picture: '',
    price: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      description: '',
      picture: '',
      price: ''
    })
    this.props.createTicket(this.state)
  }

  render() {
    return (<CreateTicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createTicket})(CreateTicketFormContainer)