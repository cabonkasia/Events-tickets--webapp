import { EVENTS_FETCHED } from '../actions/events'
import { EVENT_FETCHED } from '../actions/events'


export default (state = null, action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
    //console.log('I\'m fetching some events!')
    return action.events
    case EVENT_FETCHED:
      console.log('I\'m fetching an event!')
    return action.event
    
    default:
    return state
  }
}