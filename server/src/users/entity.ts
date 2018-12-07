import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Comment from '../comments/entity'
import Ticket from '../tickets/entity'
import { IsString, MinLength, IsEmail } from 'class-validator'


@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsEmail()
  @Column('text', {nullable:true})
  email: string

  @IsString()
  @MinLength(4)
  @Column('text', {nullable:false})
  password: string

  @OneToMany(_ => Comment, comment => comment.user, {eager:true})
  comments: Comment[]

  @OneToMany(_ => Ticket, ticket => ticket.user, {eager:true})
  tickets: Ticket[]

}