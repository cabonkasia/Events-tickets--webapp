import {Controller, Get, Post, Body, Param,/*, BodyParam*/Params} from 'routing-controllers'
import Ticket from './entity'
import calculateRisk from './logic'


@Controller()
export default class TicketController {

  @Get("/events/:id/:tid")
  async getTicket(
    @Param("id") id: number,
    @Param("tid") tid: number 
  ) {
    return {
    data: await Ticket.findOne({where: {eventId: id, id: tid}/*, relations: ["tickets"]*/})
    }
  }

  @Post("/events/:id")
  createTicket(@Body() ticket: Ticket) {
      return ticket.save()
  }

}