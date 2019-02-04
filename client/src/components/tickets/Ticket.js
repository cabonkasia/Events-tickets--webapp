import React from 'react'



export default (props) => {
    console.log(props.event)

    if(!props.event) 
    return <h1>No ticket.</h1>

    return (
      <div>
        {console.log(props.event.tickets)}
        <h1>Ticket for {props.event.name}</h1>
        <ul>Comments:
            {props.event.tickets
            .find(ticket => (ticket.id === Number(props.params.ticket_id))).comments
            .map(comment => {
                if(!comment)
                return "No comments yet"

                return <li>
                    {comment.text}
                </li>
            })
            
            }
        </ul>
        </div>
    )
}
