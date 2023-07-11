import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaytocomeController } from './daytocome/daytocome.controller';
import { DayToCome } from './daytocome/daytocome.entity';
import { DaytocomeModule } from './daytocome/daytocome.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '54.251.181.115',
      port: 5432,
      username: 'postgres',
      password: '0410',
      database: 'postgres',
      entities: [DayToCome],
      synchronize: true,
    }),
    DaytocomeModule,
  ],
  controllers: [AppController, DaytocomeController],
  providers: [AppService],
})
export class AppModule {}
