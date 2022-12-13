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
exports.RestaurantsRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const restaurants_schema_1 = require("../schemas/restaurants.schema");
let RestaurantsRepo = class RestaurantsRepo {
    constructor(restaurantsModel) {
        this.restaurantsModel = restaurantsModel;
    }
    async create(data) {
        return new this.restaurantsModel(data).save();
    }
    async findAll() {
        return this.restaurantsModel.find({})
            .exec();
    }
    findRestaurantMenu(id) {
        const filter = { _id: id };
        return this.restaurantsModel.find(filter).populate('menu');
    }
    async update(restaurantsId, data) {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findOneAndUpdate(filter, data);
    }
    async delete(restaurantsId) {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findByIdAndDelete(restaurantsId);
    }
};
RestaurantsRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(restaurants_schema_1.Restaurants.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RestaurantsRepo);
exports.RestaurantsRepo = RestaurantsRepo;
//# sourceMappingURL=restaurants.repo.js.map