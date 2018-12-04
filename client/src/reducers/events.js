import { EVENTS_FETCHED } from '../actions/events'

export default (state = null, action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
    //console.log('I'm fetching events)
    return action.events
    
    default:
    return state
  }
}