import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,/*, Index*/ } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import User from '../users/entity'
import Ticket from '../tickets/entity'

  
  @Entity()
  // @Index(['event'], {unique:true})
  export default class Comment extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id?: number
  
    @Column('text', {nullable:false})
    text: string

    @ManyToOne(_ => User, user => user.comments/*, {cascade: true}*/)
    user: User

    @ManyToOne(_ => Ticket, ticket => ticket.comments/*, {cascade: true}*/)
    ticket: Ticket[]


  }
