import { TICKET_FETCHED, TICKET_CREATE_SUCCESS } from '../actions/ticket'


export default (state = null, action) => {
  // console.log(action.ticket)
  console.log('Ticket reducer!')
  switch (action.type) {
    case TICKET_FETCHED:
    return [...state, action.ticket]
    case TICKET_CREATE_SUCCESS:
    return [...state, action.ticket]

    default:
    return state
  }
}