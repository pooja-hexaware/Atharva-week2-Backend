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
exports.menusService = void 0;
const common_1 = require("@nestjs/common");
const menus_repo_1 = require("../repository/menus.repo");
let menusService = class menusService {
    constructor(menusRepo) {
        this.menusRepo = menusRepo;
    }
    async findAll() {
        return this.menusRepo.findAll();
    }
    findMenuToppings(id) {
        return this.menusRepo.findMenuToppings(id);
    }
    async create(data) {
        data.createddate = new Date();
        return this.menusRepo.create(data);
    }
    async update(menusId, data) {
        return this.menusRepo.update(menusId, data);
    }
    async delete(menusId) {
        return this.menusRepo.delete(menusId);
    }
};
menusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [menus_repo_1.menusRepo])
], menusService);
exports.menusService = menusService;
//# sourceMappingURL=menus.service.js.map