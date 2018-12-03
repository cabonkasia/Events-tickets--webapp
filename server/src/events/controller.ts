import {Controller, Get, Post, Body, Param} from 'routing-controllers'
import Event from './entity'


@Controller()
export default class EventController {

  @Get("/events")
  async getAllEvents() {
     return {
       data: await Event.find()
     }
  }

  @Get("/events/:id")
  getOneEvent(
      @Param("id") id: number
  ) {
      return Event.findOne(id)
  }

  @Post("/events")
  createEvent(@Body() event: Event) {
      return event.save()
  }

}