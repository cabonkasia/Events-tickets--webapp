import { Controller, Get, Post, Body, Param, NotFoundError, CurrentUser, BadRequestError, Authorized } from 'routing-controllers'
import Ticket from './entity'
import Event from '../events/entity'
import User from '../users/entity'


@Controller()
export default class TicketController {
//-----------GETS only TICKET AND EVENT.NAME----------//
  @Get("/events/:event_id/tickets")
  async getAllTickets(
      @Param("event_id") id: number
    ) {
      const event = await Event.findOne({where: {id: id}})
      if(!event) 
      throw new NotFoundError(`No tickets for this event`)
      return {
      name: event.name,
      id: event.id,
      tickets: event.tickets
      }
    }
//--------------------------------------------------------//

  @Get("/events/:event_id/tickets/:ticket_id")
  async getTicket(
    @Param("event_id") id: number,
    @Param("ticket_id") tid: number
  ) {
    const ticket = await Ticket.findOne({ where: { eventId: id, id: tid } }/*{relations: ["event", "user"]}*/)

    if (!ticket) throw new NotFoundError(`Ticket does not exist`)

    // console.log(ticket.user)
    const ticketsArr = await Ticket.find(/*{ where: { userId: ticket.user_id }}*/{relations: ["user"]})
    const avgPrice = ticketsArr.map(obj => obj.price).reduce((prev, next) => prev + next);

    if (ticketsArr.length === 1) {
      ticket.risk += 10
    }
    if(ticketsArr.length !== 1) {
      ticket.risk = 5
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


  @Authorized()
  @Post("/events/:event_id/tickets")
  async createTicket(
    @CurrentUser() user: User,
    @Param("event_id") eventId: number,
    @Body() input: Ticket
    ) {
      const event = await Event.findOne({relations: ["event"]}/*{where: {id: eventId}}*/)
      if (!event) throw new BadRequestError(`Event does not exist`)
      await event.save()
      
      const ticket = await Ticket.create({
        user,
        event,
        description: input.description,
        picture: input.picture,
        price: input.price
       }).save()

      return ticket
  }


}