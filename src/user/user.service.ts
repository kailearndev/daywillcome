import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async find(): Promise<User[]> {
    const user = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.id', 'user')
      .getMany();
    return user;
  }
  async create(user: Partial<User>): Promise<User> {
    const newDay = this.userRepository.create(user);
    return this.userRepository.save(newDay);
  }
}
