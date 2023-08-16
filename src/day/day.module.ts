import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { DayController } from './day.controller';
import { Day } from './day.entity';
import { DayService } from './day.service';

@Module({
  controllers: [DayController],
  providers: [DayService, UserService],
  imports: [TypeOrmModule.forFeature([Day, User])],
})
export class DayModule {}
