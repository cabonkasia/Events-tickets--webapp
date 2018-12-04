import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = process.env.API_BASE_URL || 'http://localhost:4000'


const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
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
