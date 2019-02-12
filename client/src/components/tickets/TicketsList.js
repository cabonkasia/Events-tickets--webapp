import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(!props.event)
    return <h3>Loading tickets...</h3>

    if(props.event.tickets.length === 0) 
    return (
        <main>
        <h1>{props.event.name}</h1>
        <h3>No tickets.</h3>
        </main>
        )

    return (
      <div>
        <h3>TICKETS AVAILABLE FOR:  {props.event.name}</h3>
        <ol>
            { props.event.tickets.map(ticket => {
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
