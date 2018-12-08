import {Controller, Get, Post, Body, Param } from 'routing-controllers'
import Event from './entity'


@Controller()
export default class EventController {

  @Get("/events")
  async getAllEvents(
     //<---------------------------------->//
    // @Param("events") events: Event[]
  ) {
    
    // const sdArr = events.map(event => event.startDate > nowDate)
    // //moment.js:
    // const upToDate = moment("20111031", "YYYYMMDD").fromNow() //string (in/ago)
   
     //<---------------------------------->//

     return {
       data: await Event.find({take: 9})
     }
  }

  @Get("/events/:event_id")
  async getOneEventTickets(
      @Param("event_id") id: number
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