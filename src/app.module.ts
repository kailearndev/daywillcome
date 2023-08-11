import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaytocomeController } from './daytocome/daytocome.controller';
import { DayToCome } from './daytocome/daytocome.entity';
import { DaytocomeModule } from './daytocome/daytocome.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.130.214.81',
      port: 3306,
      username: 'kaiadmin',
      password: 'Nvl@2022',
      database: 'kaidb',
      entities: [DayToCome, User],
      synchronize: true,
    }),
    DaytocomeModule,
    UserModule,
  ],
  controllers: [AppController, DaytocomeController, UserController],
  providers: [AppService],
})
export class AppModule { }
