import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
