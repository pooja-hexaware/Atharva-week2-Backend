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
exports.menusRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const menus_schema_1 = require("../schemas/menus.schema");
let menusRepo = class menusRepo {
    constructor(menusModel) {
        this.menusModel = menusModel;
    }
    async create(data) {
        return new this.menusModel(data).save();
    }
    async findAll() {
        return this.menusModel.find({})
            .exec();
    }
    findMenuToppings(id) {
        const filter = { _id: id };
        return this.menusModel.find(filter).populate('toppings');
    }
    async update(menusId, data) {
        const filter = { _id: menusId };
        return this.menusModel.findOneAndUpdate(filter, data);
    }
    async delete(menusId) {
        const filter = { _id: menusId };
        return this.menusModel.findByIdAndDelete(menusId);
    }
};
menusRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(menus_schema_1.menus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], menusRepo);
exports.menusRepo = menusRepo;
//# sourceMappingURL=menus.repo.js.map