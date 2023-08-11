"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const daytocome_controller_1 = require("./daytocome/daytocome.controller");
const daytocome_entity_1 = require("./daytocome/daytocome.entity");
const daytocome_module_1 = require("./daytocome/daytocome.module");
const user_controller_1 = require("./user/user.controller");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '103.130.214.81',
                port: 3306,
                username: 'kaiadmin',
                password: 'Nvl@2022',
                database: 'kaidb',
                entities: [daytocome_entity_1.DayToCome, user_entity_1.User],
                synchronize: true,
            }),
            daytocome_module_1.DaytocomeModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController, daytocome_controller_1.DaytocomeController, user_controller_1.UserController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map