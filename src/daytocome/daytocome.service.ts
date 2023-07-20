import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { DayToCome } from './daytocome.entity';

@Injectable()
export class DaytocomeService {
  constructor(
    @InjectRepository(DayToCome)
    private dayToComeRepository: Repository<DayToCome>,
  ) {}
  // async findAll(): Promise<DayToCome[]> {
  //   return this.dayToComeRepository.find();
  // }
  async create(dayToCome: Partial<DayToCome>): Promise<DayToCome> {
    const newDay = this.dayToComeRepository.create(dayToCome);
    return this.dayToComeRepository.save(newDay);
  }
  async update(id: number, day: Partial<DayToCome>): Promise<DayToCome> {
    await this.dayToComeRepository.update(id, day);
    return this.dayToComeRepository.findOne({ where: { id } });
  }
  async delete(id: number): Promise<void> {
    await this.dayToComeRepository.delete(id);
  }
  async findOne(id: number): Promise<DayToCome> {
    return this.dayToComeRepository.findOne({ where: { id } });
  }
  async findDate(date?: string): Promise<DayToCome[]> {
    const dateQuery = this.dayToComeRepository.find({
      where: { date: Like(`%${date}%`) },
    });
    return date ? dateQuery : this.dayToComeRepository.find();
  }
}
