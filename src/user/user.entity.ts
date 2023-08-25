import { Exclude } from 'class-transformer';
import { Day } from 'src/day/day.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;
  @Column()
  avatar: string;
  @Column()
  avatarName: string;
  @OneToMany(() => Day, (day) => day.user)
  day: Day[];
}
