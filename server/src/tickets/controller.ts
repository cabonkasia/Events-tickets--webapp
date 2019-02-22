import { Controller, Get, Post, Body, Param, NotFoundError, CurrentUser, BadRequestError, Authorized } from 'routing-controllers'
import Ticket from './entity'
import Event from '../events/entity'
import User from '../users/entity'
import { isOnlyTicket, averagePrice, isCheaper, inBussinessHours, hasManyComments, accurateRisk } from './logic'


@Controller()
export default class TicketController {
  @Get("/events/:event_id/tickets")
  async getAllTickets(
    @Param("event_id") id: number
  ) {
    const event = await Event.findOne({ where: { id: id } })
    if (!event)
      throw new NotFoundError(`No tickets for this event`)
    return {
      name: event.name,
      id: event.id,
      tickets: event.tickets
    }
  }

  @Get("/events/:event_id/tickets/:ticket_id")
  async getTicket(
    @Param("event_id") eid: number,
    @Param("ticket_id") tid: string
  ) {
    const ticket = await Ticket.findOne({ where: { id: parseInt(tid) }, relations: ["event", "user"] })
    if (!ticket) throw new NotFoundError(`Ticket does not exist`)

    const id = ticket.user.id

    const allTickets = await Ticket.find({ relations: ["user", "event"] })

    const sameAuthorTickets = allTickets.filter(ticket => {
      if (!ticket.user)
        return;
      if (ticket.user.id === id)
        return ticket
    })

    const eventTickets = allTickets.filter(ticket => {
      if (!ticket.event)
        return;
      if (ticket.event.id === eid)
        return ticket
    })

    const average = averagePrice(eventTickets)
    const { price, timestamp, comments } = ticket


    let risk = 0
      + isOnlyTicket(sameAuthorTickets)
      + isCheaper(price, average)
      + inBussinessHours(timestamp)
      + hasManyComments(comments);

    let finalRisk = accurateRisk(risk);


    return {
      finalRisk,
      ticket
    }

  }


  @Authorized()
  @Post("/events/:event_id/tickets")
  async createTicket(
    @CurrentUser() user: User,
    @Body() input: Ticket,
    @Param("event_id") eventId: number
  ) {
    const event = await Event.findOne({ where: { id: eventId } })
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