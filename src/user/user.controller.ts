import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DayService } from 'src/day/day.service';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { plainToClass } from 'class-transformer';

@Controller('user')
@UseGuards(JwtAuthGuard)
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
  async getUserId(@Param('id') id: number): Promise<any> {
    const findUser = await this.userService.getUserId(id);
    if (!findUser) {
      throw new Error('User not foud');
    }
    const { password, ...newUser } = findUser;
    return newUser;
  }
  // update
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() createUser: UpdateUserDto,
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
