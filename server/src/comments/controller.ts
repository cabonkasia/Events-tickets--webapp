import {Controller, Body, Get, Param, Authorized, Post, CurrentUser, BadRequestError, NotFoundError } from 'routing-controllers'
import Comment from './entity'
import Ticket from '../tickets/entity'
import User from '../users/entity'

@Controller()
export default class CommentController {

  @Get("/events/:event_id/tickets/:ticket_id/comments")
  async getAllComments(
      @Param("ticket_id") ticketId: number
    ) {
      const ticket = await Ticket.findOne({where: {id: ticketId}})
      if(!ticket) 
      throw new NotFoundError(`No tickets for this event`)
      return {
      comments: ticket.comments
      }
    }

  @Authorized()
  @Post("/events/:event_id/tickets/:ticket_id/comments")
  async createComment(
    @CurrentUser() user: User,
    @Param("ticket_id") ticketId: number,
    @Body() input: Comment
    ) {
      const ticket = await Ticket.findOne({where: {id: ticketId}})
      if (!ticket) throw new BadRequestError(`Event does not exist`)
      await ticket.save()
      
      const comment = await Comment.create({
        user,
        ticket,
        text: input.text
       }).save()

      return comment
  }


  }



