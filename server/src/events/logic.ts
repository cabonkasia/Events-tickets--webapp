import Event from './entity'

export const isComingUp = (event: Event) => {
  const eventDate = event.startDate
  const nowDate = new Date(Date.now())
  eventDate > nowDate ? event : null
}