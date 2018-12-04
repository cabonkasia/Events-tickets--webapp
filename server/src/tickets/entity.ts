import { Entity, PrimaryGeneratedColumn, Column, ManyToOne/*, Index*/ } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Event from '../events/entity'

@Entity()
// @Index(['event'], {unique:true})
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:true})
  picture?: string

  @Column('text', {nullable:false})
  price: number

  @ManyToOne(_ => Event, event => event.tickets, {cascade: true})
  event: Event;

  // @Column()
  // eventId: number
}