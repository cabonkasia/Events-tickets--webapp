import {Controller, Get, Param } from 'routing-controllers'
import Comment from './entity'


@Controller()
export default class CommentController {

  @Get("/events/:event_id/tickets/:ticket_id/comments/:comment_id")
  async getOneEventTickets(
      @Param("comment_id") id: number
    ) {
      return {
      data: await Comment.findOne({where: {id: id}})
      }
    }

  }



