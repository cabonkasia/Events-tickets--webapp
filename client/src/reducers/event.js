import { EVENT_FETCHED } from '../actions/events'


export default (state = null, action) => {
  // console.log(action.event)
  console.log('Event reducer!')
  switch (action.type) {
    case EVENT_FETCHED:
    return action.event
    
    default:
    return state
  }
}