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
  async getImage() {
    const e = await Event.findOne({where: {id: 2}})
    if(!e) return 'No event found'
    const image = e.picture
    console.log(image)
    return {
      image
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