import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'


const baseUrl = process.env.API_BASE_URL || 'http://localhost:4000'


const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

export const loadEvents = () => (dispatch, getState) => {
  console.log("events loaded")
  if (getState().events) 
  return
  request(`${baseUrl}/events`)
    .then(response => {
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (eventId) => dispatch => {
  request
  .get(`${baseUrl}/events/${eventId}/tickets`)
  .then(response => {
    dispatch(eventFetched(response.body))
  })
  .catch(console.error)
}


