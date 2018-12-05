import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Comment from '../comments/entity'
import Ticket from '../tickets/entity'


@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('text', {nullable:true})
  email: string

  @Column('text', {nullable:false})
  password: string

  //user = author:
  @OneToMany(_ => Comment, comment => comment.user, {eager:true})
  comments: Comment[]

  @OneToMany(_ => Ticket, ticket => ticket.user, {eager:true})
  tickets: Ticket[]

  // @Column()
  // eventId: number
}