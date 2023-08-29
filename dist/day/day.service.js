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
exports.DayService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
const typeorm_2 = require("typeorm");
const day_entity_1 = require("./day.entity");
let DayService = exports.DayService = class DayService {
    constructor(dayRepository, userRepository) {
        this.dayRepository = dayRepository;
        this.userRepository = userRepository;
    }
    async getAllDate() {
        return await this.dayRepository.find({
            order: {
                date: 'DESC',
            },
        });
    }
    async getDateById(id) {
        return await this.dayRepository.findOne({
            where: { id },
        });
    }
    async createDate(day, user) {
        const newDate = await this.dayRepository.save(day);
        user.day.push(newDate);
        await this.userRepository.save(user);
        return newDate;
    }
    async updateDate(id, day) {
        await this.dayRepository.update(id, day);
        return await this.dayRepository.findOne({
            where: { id },
        });
    }
    async deleteDate(id) {
        await this.dayRepository.delete(id);
    }
};
exports.DayService = DayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(day_entity_1.Day)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DayService);
//# sourceMappingURL=day.service.js.map