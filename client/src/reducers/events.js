import { EVENTS_FETCHED } from '../actions/events'
import { EVENT_FETCHED } from '../actions/events'


export default (state = null, action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
    return action.events
    // case EVENT_FETCHED:
    // return action.event
    
    default:
    return state
  }
}