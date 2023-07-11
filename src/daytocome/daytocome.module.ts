import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DayToCome } from './daytocome.entity';
import { DaytocomeService } from './daytocome.service';

@Module({
  providers: [DaytocomeService],
  imports: [TypeOrmModule.forFeature([DayToCome])],
  exports: [DaytocomeService],
})
export class DaytocomeModule {}
