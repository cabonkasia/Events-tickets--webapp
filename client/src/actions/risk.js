import request from 'superagent'
import { baseUrl } from '../constants'

export const FETCH_RISK = 'FETCH_RISK'

const riskFetched = risk => ({
  type: FETCH_RISK,
  risk
});

export const loadRisk = (eventId, ticketId) => dispatch => {
  request
  .get(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
  .then(response => {
    console.log(response.body)
    dispatch(riskFetched(response.body.finalRisk))
  })
  .catch(console.error)
}


