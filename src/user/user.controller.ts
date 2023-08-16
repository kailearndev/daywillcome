import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DayService } from 'src/day/day.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private dayService: DayService,
  ) {}
  //get all
  @Get('/')
  async getAllUser() {
    return await this.userService.getAllUser();
  }
  @Post('/')
  async createUser(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(userDto);
  }
  @Get(':id')
  async getUserId(@Param('id') id: number): Promise<User> {
    const findUser = await this.userService.getUserId(id);
    if (!findUser) {
      throw new Error('User not foud');
    } else {
      return findUser;
    }
  }
  // update
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() createUser: CreateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, createUser);
  }
  //delte
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    const user = await this.userService.getUserId(id);
    if (user) {
      await this.userService.deleteUser(id);
    } else {
      throw new Error('User not found');
    }
  }
}
