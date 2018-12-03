import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:false})
  picture: string

  @Column('text', {nullable:false})
  startDate: Date

  @Column('text', {nullable:false})
  endDate: Date


//add relation OneToMany tickets (&ManyToOne in Ticket entity)
}