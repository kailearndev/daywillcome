import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '103.130.214.81',
  port: 3306,
  username: 'kaiadmin',
  password: 'Nvl@2022',
  database: 'daywillcomedb',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  //   entities: [],
  //   synchronize: true,
};
