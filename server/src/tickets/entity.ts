import { Entity, PrimaryGeneratedColumn, Column, ManyToOne/*, Index*/, Timestamp,CreateDateColumn, JoinColumn, OneToMany} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Event from '../events/entity'
import User from '../users/entity'
import Comment from '../comments/entity'



@Entity()
// @Index(['event']/*, {unique:true}*/)
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:true})
  picture?: string

  @Column('text', {nullable:false})
  price: number

  // @Column("int", { nullable: true })
  // eventId: number

  @ManyToOne(_ => Event, event => event.tickets, /*{cascade: true}*/)
  @JoinColumn({ name: "eventId" })
  event: Event

  @ManyToOne(_ => User, user => user.tickets, {cascade: true})
  @JoinColumn({ name: "userId" })
  user: User

  @OneToMany(_=> Comment, comment => comment.ticket)
  comments: Comment[]
  
  @CreateDateColumn({type: "timestamp"})
  timestamp: Timestamp

  // @Column()
  // eventId: number
}