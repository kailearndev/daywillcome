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
exports.DaytocomeController = void 0;
const common_1 = require("@nestjs/common");
const daytocome_entity_1 = require("./daytocome.entity");
const daytocome_service_1 = require("./daytocome.service");
const datefilter_dto_1 = require("./dto/datefilter.dto");
let DaytocomeController = exports.DaytocomeController = class DaytocomeController {
    constructor(daytoComeService) {
        this.daytoComeService = daytoComeService;
    }
    async findDate(date) {
        return this.daytoComeService.findDate(date.date);
    }
    async create(day) {
        return this.daytoComeService.create(day);
    }
    async update(id, day) {
        return this.daytoComeService.update(id, day);
    }
    async delete(id) {
        const user = await this.daytoComeService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return this.daytoComeService.delete(id);
    }
    async findOne(id) {
        const user = await this.daytoComeService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('Date not Exit!');
        }
        else {
            return user;
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [datefilter_dto_1.DateFilterDto]),
    __metadata("design:returntype", Promise)
], DaytocomeController.prototype, "findDate", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [daytocome_entity_1.DayToCome]),
    __metadata("design:returntype", Promise)
], DaytocomeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, daytocome_entity_1.DayToCome]),
    __metadata("design:returntype", Promise)
], DaytocomeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DaytocomeController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DaytocomeController.prototype, "findOne", null);
exports.DaytocomeController = DaytocomeController = __decorate([
    (0, common_1.Controller)('/api/daytocome'),
    __metadata("design:paramtypes", [daytocome_service_1.DaytocomeService])
], DaytocomeController);
//# sourceMappingURL=daytocome.controller.js.map