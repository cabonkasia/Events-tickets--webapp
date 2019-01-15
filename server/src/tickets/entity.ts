import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany, JoinColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Event from '../events/entity'
import User from '../users/entity'
import Comment from '../comments/entity'



@Entity()
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:true})
  picture?: string

  @Column('text', {nullable:true})
  imgalt?: string

  @Column('int', {nullable:true})
  price: number

  // @ManyToOne(_ => Event, event => event.tickets)
  // @JoinColumn({ name: "eventId" })
  @ManyToOne(_ => Event, event => event.tickets/*, {eager:true}*/)
  event: Event

  // @Column('int', { nullable: true })
  // eventId: number

  @ManyToOne(_ => User, user => user.tickets)
  user: User

  // @Column('int', { nullable: true })
  // userId: number

  @OneToMany(_=> Comment, comment => comment.ticket, {eager:true})
  comments: Comment[]
  
  @CreateDateColumn({type: 'text'})
  timestamp: string

  @Column('int', {nullable:true})
  risk: number
}