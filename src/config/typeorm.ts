import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '103.82.38.16',
  port: 3306,
  username: 'admin',
  password: 'Nvl@2022',
  database: 'kai_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  //   entities: [],
  //   synchronize: true,
};
