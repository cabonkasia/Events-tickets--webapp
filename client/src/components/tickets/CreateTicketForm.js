import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createTicket} from '../../actions/ticket'
import '../../styles/ticketform.css'


class CreateTicketForm extends Component {

  state = {    
      description: '',
      picture: '',
      price: ''
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
 
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      description: '',
      picture: '',
      price: ''
    })
    this.props.createTicket(this.state, Number(this.props.event.id))
  }

  render () {
    console.log(this.props)
    return (
      <div>
  
        <form onSubmit={this.handleSubmit}>
          <label className="label">Picture</label>
          <input onChange={this.handleChange} name="picture" value={this.picture}></input>
          <input onChange={this.handleChange} name="price" value={this.price}></input>
          <label className="label">Price</label>
          <input onChange={this.handleChange} name="description" value={this.description}></input>
          <label className="label">Description</label>

          <input type="submit"></input>
        </form>
  
      </div>
    )

  }

}
const mapStateToProps = state => ({
  event: state.event,
  ticket: state.ticket
})

export default connect(mapStateToProps, {createTicket})(CreateTicketForm)
