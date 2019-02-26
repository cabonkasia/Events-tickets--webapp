import request from 'superagent'
import {baseUrl} from '../constants'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const IMAGE_FETCHED = 'IMAGE_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'


const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})


export const loadEvents = () => (dispatch, getState) => {
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
    console.log(response.body)
    dispatch(eventFetched(response.body))
  })
  .catch(console.error)
}

export const loadEventsHomePage = () => (dispatch, getState) => {
  if (getState().events) 
  return
  request(`${baseUrl}/`)
  .then(response => {
    dispatch(eventsFetched(response.body))
  })
  .catch(console.error)
}


export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}


