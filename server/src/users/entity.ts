import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Comment from '../comments/entity'
import Ticket from '../tickets/entity'
import Event from '../events/entity'
import { IsString, MinLength, IsEmail } from 'class-validator'
import * as bcrypt from 'bcrypt'



@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', { nullable: true })
  name: string

  @IsEmail()
  @Column('text', { nullable: true })
  email: string

  @IsString()
  @MinLength(4)
  @Column('text', { nullable: false })
  password: string


  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }


  @OneToMany(_ => Comment, comment => comment.user, { eager: true })
  comments: Comment[]

  @OneToMany(_ => Ticket, ticket => ticket.user/*, {eager:true}*/)
  tickets: Ticket[]
  //17.01------------------>:
  // @OneToMany(_ => Event, event => event.user)
  // events: Event[]

}