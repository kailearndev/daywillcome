import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DayToCome } from './daytocome.entity';
import { DaytocomeService } from './daytocome.service';

@Controller('/api/daytocome')
export class DaytocomeController {
  constructor(private readonly daytoComeService: DaytocomeService) {}
  //
  @Get('/')
  async findAll(): Promise<DayToCome[]> {
    return this.daytoComeService.findAll();
  }
  @Post('create')
  async create(@Body() day: DayToCome): Promise<DayToCome> {
    return this.daytoComeService.create(day);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() day: DayToCome): Promise<any> {
    return this.daytoComeService.update(id, day);
  }

  //delete user
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const user = await this.daytoComeService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.daytoComeService.delete(id);
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DayToCome> {
    const user = await this.daytoComeService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }
}
