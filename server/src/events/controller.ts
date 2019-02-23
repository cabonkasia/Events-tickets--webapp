import { Controller, Get, Post, Body, Authorized } from 'routing-controllers'
import Event from './entity'


@Controller()
export default class EventController {

  @Get("/events")
  async getAllEvents() {
    return {
      data: await Event.find({ take: 9 })
    }
  }

  @Get("/")
  async getEventsDetails() {
    return {
      events: await Event.find()
    }
  }

  // @Authorized()
  @Post("/events")
  createEvent(
    @Body() event: Event
  ) {
    return event.save()
  }

}