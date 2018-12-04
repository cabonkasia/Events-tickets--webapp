import {Controller, Get, Post, Body, Param/*, BodyParam*/} from 'routing-controllers'
import Event from './entity'
// import { isComingUp } from './logic'


@Controller()
export default class EventController {

  @Get("/events")
  async getAllEvents() {
     return {
       data: await Event.find(
        //    {
        //    where: { 
            
            //  }
    //     // where: isComingUp(event)
    //   }
      )
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