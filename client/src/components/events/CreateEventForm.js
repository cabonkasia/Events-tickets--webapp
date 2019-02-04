import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../../actions/events'
import '../../styles/ticketform.css'


class CreateEventForm extends Component {

  state = {
    name: '',
    description: '',
    picture: '',
    imgalt: '',
    startDate: '',
    endDate: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      description: '',
      picture: '',
      imgalt: '',
      startDate: '',
      endDate: ''
    })
    this.props.createEvent(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>Create new event:</p>
        <form onSubmit={this.handleSubmit}>

          <label className="label">Event name</label>
          <input onChange={this.handleChange} name="name" value={this.name}></input>
          <label className="label">Star date</label>
          <input onChange={this.handleChange} name="startDate" value={this.startDate}></input>
          <label className="label">End date</label>
          <input onChange={this.handleChange} name="endDate" value={this.endDate}></input>
          <label className="label">Description</label>
          <input onChange={this.handleChange} name="description" value={this.description}></input>
          <label className="label">Picture</label>
          <input onChange={this.handleChange} name="picture" value={this.picture}></input>
          <label className="label">Picture description</label>
          <input onChange={this.handleChange} name="imgalt" value={this.imgalt}></input>


          <input type="submit"></input>

        </form>

      </div>
    )

  }

}
const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { createEvent })(CreateEventForm)
