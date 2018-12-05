import { EVENT_FETCHED } from '../actions/events'


export default (state = null, action) => {
  console.log(action.event)
  switch (action.type) {
    case EVENT_FETCHED:
      // console.log('I\'m fetching an event!')
    return action.event
    
    default:
    return state
  }
}