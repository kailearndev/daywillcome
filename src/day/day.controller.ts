import { CreateDayDto } from './dto/create-day.dto';
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
import { DayService } from './day.service';
import { Day } from './day.entity';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('day')
@UseGuards(JwtAuthGuard)
export class DayController {
  constructor(
    private dayService: DayService,
    private userService: UserService,
  ) {}
  @Get()
  async getAllDate(): Promise<Day[]> {
    return await this.dayService.getAllDate();
  }
  @Get(':id')
  async getDateById(@Param('id') id: number): Promise<Day> {
    const dateExist = await this.dayService.getDateById(id);
    if (!dateExist) {
      throw new Error('Date not found !!');
    } else {
      return dateExist;
    }
  }
  @Post()
  async createDate(@Body() createDayDto: CreateDayDto): Promise<Day> {
    const users = await this.userService.getUserId(createDayDto.userId);
    return await this.dayService.createDate(createDayDto, users);
  }
  @Put(':id')
  async updateDate(
    @Param('id') id: number,
    @Body() createDayDto: CreateDayDto,
  ): Promise<Day> {
    return await this.dayService.updateDate(id, createDayDto);
  }
  @Delete(':id')
  async deleteDate(@Param('id') id: number): Promise<void> {
    const userExist = await this.dayService.getDateById(id);
    if (!userExist) {
      throw new Error('User not found !!');
    } else {
      return await this.dayService.deleteDate(id);
    }
  }
}
