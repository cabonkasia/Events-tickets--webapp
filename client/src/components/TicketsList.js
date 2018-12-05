import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(props.event === null) 
    return <h1>No tickets.</h1>

    return (
      <div>
        <h3>{props.event.data.name}</h3>
        <ol>
            { props.event.data.tickets.map(ticket => {
                return <Link to={`events/${ticket.event_id}/tickets/${ticket.id}`}>
                <li>
                <img src={ticket.picture}/><br/>
                Price: {ticket.price}<br/> 
                Description: {ticket.description}<br/>
                </li>
                </Link>
            }) }
        </ol>
        </div>
    )
}
