import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('days')
export class Day {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date' })
  date: string;
  @Column()
  detail: string;
  @Column({ default: false })
  isLate: boolean;
  @ManyToOne(() => User, (user) => user.day)
  user: User;
}
