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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToppingsService = void 0;
const common_1 = require("@nestjs/common");
const toppings_repo_1 = require("../repository/toppings.repo");
let ToppingsService = class ToppingsService {
    constructor(toppingsRepo) {
        this.toppingsRepo = toppingsRepo;
    }
    async findAll() {
        return this.toppingsRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.toppingsRepo.create(data);
    }
    async update(toppingsId, data) {
        return this.toppingsRepo.update(toppingsId, data);
    }
    async delete(toppingsId) {
        return this.toppingsRepo.delete(toppingsId);
    }
};
ToppingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [toppings_repo_1.ToppingsRepo])
], ToppingsService);
exports.ToppingsService = ToppingsService;
//# sourceMappingURL=toppings.service.js.map