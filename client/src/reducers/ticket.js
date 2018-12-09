import { TICKET_FETCHED } from '../actions/ticket'


export default (state = null, action) => {
  // console.log(action.ticket)
  console.log('Ticket reducer!')
  switch (action.type) {
    case TICKET_FETCHED:
    return [...state, action.ticket]
    
    default:
    return state
  }
}