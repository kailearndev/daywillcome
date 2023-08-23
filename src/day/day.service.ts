import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Day } from './day.entity';
import { CreateDayDto } from './dto/create-day.dto';

@Injectable()
export class DayService {
  constructor(
    @InjectRepository(Day)
    private dayRepository: Repository<Day>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async getAllDate(): Promise<Day[]> {
    return await this.dayRepository.find();
  }
  async getDateById(id: number): Promise<Day> {
    return await this.dayRepository.findOne({
      where: { id },
    });
  }
  async createDate(day: CreateDayDto, user: User): Promise<Day> {
    const newDate = await this.dayRepository.save(day);
    user.day.push(newDate);
    await this.userRepository.save(user);
    return newDate;
  }
  async updateDate(id: number, day: CreateDayDto): Promise<Day> {
    await this.dayRepository.update(id, day);
    return await this.dayRepository.findOne({
      where: { id },
    });
  }
  async deleteDate(id: number): Promise<void> {
    await this.dayRepository.delete(id);
  }
}
