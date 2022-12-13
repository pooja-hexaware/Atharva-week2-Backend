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
exports.OrdersRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const orders_schema_1 = require("../schemas/orders.schema");
let OrdersRepo = class OrdersRepo {
    constructor(ordersModel) {
        this.ordersModel = ordersModel;
    }
    async create(data) {
        return new this.ordersModel(data).save();
    }
    async findAll() {
        return this.ordersModel.find({})
            .exec();
    }
    async update(ordersId, data) {
        const filter = { _id: ordersId };
        return this.ordersModel.findOneAndUpdate(filter, data);
    }
    async delete(ordersId) {
        const filter = { _id: ordersId };
        return this.ordersModel.findByIdAndDelete(ordersId);
    }
};
OrdersRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(orders_schema_1.Orders.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersRepo);
exports.OrdersRepo = OrdersRepo;
//# sourceMappingURL=orders.repo.js.map