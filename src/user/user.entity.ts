import { DayToCome } from 'src/daytocome/daytocome.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
  @OneToMany(() => DayToCome, (day_to_come) => day_to_come.user) // specify inverse side as a second parameter
  daytocome: DayToCome[];
}
