import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(props.event === null) 
    return <h1>No tickets.</h1>


    return (
      <div>
        <h3>TICKETS AVAILABLE FOR:  {props.event.name}</h3>
        <ol>
            { props.event.tickets.map(ticket => {
                console.log(props.event.tickets)
                return <Link to={`/events/${props.event.id}/tickets/${ticket.id}`}>
                {/* return <Link to={`/events/${ticket.event_id}/tickets/${ticket.id}`}> */}

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
