import React from 'react'


export default (props) => {

    if (props.event === null)
        return <h1>This ticket does not exist.</h1>

    return (
        <div>
            {console.log(props.params)}
            <h1>Ticket for {props.event.name}</h1>
            <h3>Fraud risk:
            {props.risk}

            </h3>
            <ul>Comments:
            {props.event.tickets
                    .map(ticket => {
                        if (ticket.id === Number(props.params.ticket_id)) {
                            if (ticket.comments.length !== 0) {
                                return ticket.comments
                                    .map(comment => {
                                        return <li>
                                            {comment.text}
                                        </li>

                                    }
                                    )
                            } else {
                                return " No comments"
                            }
                        }
                        else {
                            return null;
                        }

                    })

                }
            </ul>
        </div>
    )
}
