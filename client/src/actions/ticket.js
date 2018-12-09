import request from 'superagent'

export const TICKET_FETCHED = 'EVENT_FETCHED'


const baseUrl = process.env.API_BASE_URL || 'http://localhost:4000'


const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
})


export const loadTicket = (eventId, ticketId) => dispatch => {
  request
  .get(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
  .then(response => {
    dispatch(ticketFetched(response.body))
  })
  .catch(console.error)
}

// export const createTicket = () => (dispatch, getState) => {
//   const state = getState()
//   const jwt = state.currentUser.jwt
//   request
//   .get()
// }

