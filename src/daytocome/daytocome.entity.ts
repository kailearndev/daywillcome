import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class DayToCome {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: string;
  @Column()
  isLate: number;
  @Column()
  detail: string;
  @ManyToOne(() => User, (user) => user.daytocome)
  @JoinColumn()
  user: User;
}
