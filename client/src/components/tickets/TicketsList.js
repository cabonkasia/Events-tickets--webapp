import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    console.log(props)
    if(!props.event 
        || !props.event.tickets
        ) 
    return <h1>No tickets.</h1>


    return (
      <div>
        <h3>TICKETS AVAILABLE FOR:  {props.event.name}</h3>
        <ol>
            { props.event.tickets.map(ticket => {
                console.log(props.event.tickets)
                return <Link to={`/events/${props.event.id}/tickets/${ticket.id}`}>
                <li>
                <img src={ticket.picture} alt={ticket.imgalt}/><br/>
                Price: {ticket.price}<br/> 
                Description: {ticket.description}<br/>
                </li>
                </Link>
            }) }
        </ol>
        </div>
    )
}
