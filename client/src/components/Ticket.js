import React from 'react'


export default (props) => {
    
    if(props.event === null) 
    return <h1>No tickets.</h1>

    return (
      <div>
        {console.log(props.event.tickets)}
        <h1>Ticket for {props.event.name}</h1>
        <ul>Comments:
            {props.event.tickets
            .find(ticket => (ticket.id == props.params.ticket_id)).comments
            .map(comment => {
                return <li>
                    {comment.text}
                </li>
            })
            
            }
        </ul>
        </div>
    )
}
