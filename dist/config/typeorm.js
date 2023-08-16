"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
exports.typeormConfig = {
    type: 'mysql',
    host: '103.130.214.81',
    port: 3306,
    username: 'kaiadmin',
    password: 'Nvl@2022',
    database: 'daywillcomedb',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.js.map