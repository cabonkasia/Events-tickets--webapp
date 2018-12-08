import { Controller, Get, Post, Body, Param, NotFoundError } from 'routing-controllers'
import Ticket from './entity'


@Controller()
export default class TicketController {

  @Get("/events/:event_id/tickets/:ticket_id")
  async getTicket(
    @Param("event_id") id: number,
    @Param("ticket_id") tid: number
  ) {
    const ticket = await Ticket.findOne({ where: { eventId: id, id: tid } })

    if (!ticket) throw new NotFoundError(`Ticket does not exist`)

    const ticketsArr = await Ticket.find({ where: { userId: ticket.userId } })
    const avgPrice = ticketsArr.map(obj => obj.price).reduce((prev, next) => prev + next);

    if (ticketsArr.length === 1) {
      ticket.risk += 10
    }
    if (ticket.price < avgPrice) {
      ticket.risk += (avgPrice - ticket.price)
    }
    if (ticket.price > avgPrice) {
      const diff = ticket.price - avgPrice
      diff < 10 ? ticket.risk -= diff : ticket.risk -= 10
    }
    //bh - business hours
    const h = ticket.timestamp.slice(11, 13)
    const bh = parseInt(h) >= 9 && parseInt(h) <= 17
    if (bh) { ticket.risk -= 10 }
    if (!bh) { ticket.risk += 10 }

    if (ticket.comments.length > 3)
      ticket.risk += 5

    if (ticket.risk > 95) 
    ticket.risk = 95

    return {
      ticket
    }
  }

  @Post("/events/:event_id")
  createTicket(@Body() ticket: Ticket) {
    return ticket.save()
  }

}