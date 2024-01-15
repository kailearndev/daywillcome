"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
exports.typeormConfig = {
    type: 'mysql',
    host: '103.82.38.16',
    port: 3306,
    username: 'admin',
    password: 'Nvl@2022',
    database: 'kai_db',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.js.map