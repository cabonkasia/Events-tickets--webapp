import { Controller, Get, Post, Body, Authorized, Put, Param, NotFoundError } from 'routing-controllers'
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

  // @Authorized()
  @Put("/events/:event_id") 
  async updateEvent(
    @Param('event_id') eventId: string,
    @Body() update: Partial<Event>
  ) {
    const event = await Event.findOne(parseInt(eventId))
    if (!event) throw new NotFoundError('Cannot find page')
    return Event.merge(event, update).save()
  }
}

