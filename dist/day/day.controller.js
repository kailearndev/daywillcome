"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayController = void 0;
const create_day_dto_1 = require("./dto/create-day.dto");
const common_1 = require("@nestjs/common");
const day_service_1 = require("./day.service");
const user_service_1 = require("../user/user.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let DayController = exports.DayController = class DayController {
    constructor(dayService, userService) {
        this.dayService = dayService;
        this.userService = userService;
    }
    async getAllDate() {
        return await this.dayService.getAllDate();
    }
    async getDateById(id) {
        const dateExist = await this.dayService.getDateById(id);
        if (!dateExist) {
            throw new Error('Date not found !!');
        }
        else {
            return dateExist;
        }
    }
    async createDate(createDayDto) {
        const users = await this.userService.getUserId(createDayDto.userId);
        return await this.dayService.createDate(createDayDto, users);
    }
    async updateDate(id, createDayDto) {
        return await this.dayService.updateDate(id, createDayDto);
    }
    async deleteDate(id) {
        const userExist = await this.dayService.getDateById(id);
        if (!userExist) {
            throw new Error('User not found !!');
        }
        else {
            return await this.dayService.deleteDate(id);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DayController.prototype, "getAllDate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DayController.prototype, "getDateById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_day_dto_1.CreateDayDto]),
    __metadata("design:returntype", Promise)
], DayController.prototype, "createDate", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_day_dto_1.CreateDayDto]),
    __metadata("design:returntype", Promise)
], DayController.prototype, "updateDate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DayController.prototype, "deleteDate", null);
exports.DayController = DayController = __decorate([
    (0, common_1.Controller)('day'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [day_service_1.DayService,
        user_service_1.UserService])
], DayController);
//# sourceMappingURL=day.controller.js.map