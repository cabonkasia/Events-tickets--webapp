import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(props.events === null) 
    return <h1>No events.</h1>

    // console.log(props.events, 'event list')
    return (
        <ul>
            { props.events.data.map(event => {
                return <Link to={`events/${event.id}`}>
                <li>
                <img src={event.picture}/><br/>
                Name: {event.name}<br/> 
                Description: {event.description}<br/>
                Start date: {event.startDate}<br/>
                End date: {event.endDate}</li>
                </Link>
            }) }
        </ul>
    )
}
