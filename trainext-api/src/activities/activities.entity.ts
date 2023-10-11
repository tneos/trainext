import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Activity } from '../enums/Activity';
import { Status } from '../enums/Status';

@Entity()
export class Activities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: Activity,
    default: Activity.running,
  })
  activity: Activity;

  @Column({
    type: 'varchar',
    length: 255,
  })
  date: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  time: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.planned,
  })
  status: Status;

  @Column({
    type: 'varchar',
    length: 255,
  })
  duration: string;
}
