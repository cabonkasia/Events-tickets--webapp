import {Controller, Get, Post, Body, Param/*, BodyParam*/} from 'routing-controllers'
import Ticket from './entity'


@Controller()
export default class TicketController {

  @Post("/events/:id")
  createTicket(@Body() ticket: Ticket) {
      return ticket.save()
  }

}