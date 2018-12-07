import {Controller, Get, Post, Body, Param } from 'routing-controllers'
import Event from './entity'


@Controller()
export default class EventController {

  @Get("/events")
  async getAllEvents() {

     return {
       data: await Event.find({take: 9})
     }
  }

  @Get("/events/:id")
  async getOneEventTickets(
      @Param("id") id: number
    ) {
      return {
      data: await Event.findOne({where: {id: id}})
      }
    }
  
  @Post("/events")
  createEvent(
      @Body() event: Event
    ) {
      return event.save()
  }

}