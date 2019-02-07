import request from 'superagent'
import {baseUrl} from '../constants'


export const TICKET_FETCHED = 'TICKET_FETCHED'
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'



const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
})

const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
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


export const createTicket = (data, eventId) => dispatch => {
  request
    .post(`${baseUrl}/events/${eventId}/tickets`)
    .send(data)
    .then(response => {
      dispatch(ticketCreateSuccess(response.body))
    })
    .catch(console.error)
}

