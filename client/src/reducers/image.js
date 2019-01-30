import { IMAGE_FETCHED } from '../actions/events'


export default (state = null, action) => {
  console.log('Image reducer!')

  switch (action.type) {
    case IMAGE_FETCHED:
    return action.image.image
    
    default:
    return state
  }
}