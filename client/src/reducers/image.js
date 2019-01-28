import { IMAGE_FETCHED } from '../actions/events'


export default (state = null, action) => {
  // console.log(action.event)
  switch (action.type) {
    case IMAGE_FETCHED:
    return action.image
    
    default:
    return state
  }
}