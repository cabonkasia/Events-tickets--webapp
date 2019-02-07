import React from 'react'


export default (props) => {
    
    if(props.event === null) 
    return <h1>This ticket does not exist.</h1>

    return (
      <div>
        {console.log(props.event.tickets)}
        <h1>Ticket for {props.event.name}</h1>
        <ul>Comments:
            {props.event.tickets
            .map(ticket => {
                if(ticket.id === Number(props.params.ticket_id))
                    return ticket.comments
                    .map(comment => 
                         <li>
                            {comment.text}
                        </li>
                    )
                    return "No comments"
                
            })
            
            }
        </ul>
        </div>
    )
}
