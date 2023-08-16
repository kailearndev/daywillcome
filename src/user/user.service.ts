import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Day } from 'src/day/day.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  //get all user
  async getAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }
  //get User By id

  //create new User
  async createUser(user: CreateUserDto): Promise<User> {
    const hashPassword = await bcrypt.hash(user.password, 12);
    const userCreate = this.userRepository.create({
      ...user,
      password: hashPassword,
    });
    const newUser = await this.userRepository.save(userCreate);
    return newUser;
  }
  //update new User

  async updateUser(id: number, user: CreateUserDto): Promise<User> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOne({ where: { id } });
  }
  async getUserName(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { username },
    });
  }
  async getUserId(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id },
      relations: {
        day: true,
      },
    });
  }
  //delete
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
