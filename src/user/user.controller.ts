import { Body, Controller, Get, Post } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findDate(): Promise<User[]> {
    return this.userService.find();
  }
  @Post()
  async create(@Body() user: userDto): Promise<User> {
    return this.userService.create(user);
  }
}
