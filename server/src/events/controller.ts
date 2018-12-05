import {Controller, Get, Post, Body, Param } from 'routing-controllers'
import Event from './entity'
// import { isComingUp } from './logic'


@Controller()
export default class EventController {

    // const nowDate = new Date(Date.now())

  @Get("/events")
  async getAllEvents() {
     return {
       data: await Event.find(
        
        //    {
        //    where: { startDate > this.nowDate
            
        //      }
        // where: isComingUp(event)
    //   }
      )
     }
  }

  @Get("/events/:id")
  async getOneEventTickets(
      @Param("id") id: number
    ) {
      return {
      data: await Event.findOne({where: {id: id}/*, relations: ["tickets"]*/})
      }
    }
  

  @Post("/events")
  createEvent(
      @Body() event: Event
    ) {
      return event.save()
  }

}