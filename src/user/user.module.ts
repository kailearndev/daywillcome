import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { DayService } from 'src/day/day.service';
import { Day } from 'src/day/day.entity';

@Module({
  // exports: [UserModule],
  controllers: [UserController],
  providers: [UserService, DayService],
  imports: [TypeOrmModule.forFeature([User, Day])],
})
export class UserModule {}
