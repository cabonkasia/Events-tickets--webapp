import { EVENT_FETCHED, EVENT_CREATE_SUCCESS } from '../actions/events'


export default (state = null, action) => {
  // console.log(action.event)
  console.log('Event reducer!')
  switch (action.type) {
    case EVENT_FETCHED:
    return action.event
    case EVENT_CREATE_SUCCESS:
    return [...state, action.ticket]
    
    default:
    return state
  }
}