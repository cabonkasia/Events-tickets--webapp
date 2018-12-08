import {Controller, Get, Post, Body, Param } from 'routing-controllers'
import Event from './entity'


@Controller()
export default class CommentController {

  @Get("/events/:event_id/tickets/:ticket_id/comments/:comment_id")
  async getOneEventTickets(
      @Param("comment_id") id: number
    ) {
      return {
      data: await Event.findOne({where: {id: id}})
      }
    }
    
  }



