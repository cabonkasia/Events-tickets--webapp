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

const imageFetched = image => ({
  type: IMAGE_FETCHED,
  image
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
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

export const loadImage = () => (dispatch, getState) => {
  if (getState().image) 
  return
  request(`${baseUrl}/`)
  .then(response => {
    dispatch(imageFetched(response.body))
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


