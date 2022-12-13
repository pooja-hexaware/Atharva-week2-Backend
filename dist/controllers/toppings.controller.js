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
exports.ToppingsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const toppings_dto_dto_1 = require("../dto/toppings-dto.dto");
const toppings_service_1 = require("../services/toppings.service");
let ToppingsController = class ToppingsController {
    constructor(toppingsService) {
        this.toppingsService = toppingsService;
    }
    async create(toppingsDto) {
        const res = this.toppingsService.create(toppingsDto);
        return res;
    }
    async findAll() {
        return this.toppingsService.findAll();
    }
    update(id, toppingsDto) {
        return this.toppingsService.update(id, toppingsDto);
    }
    delete(id) {
        return this.toppingsService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../schemas/toppings.schema").Toppings }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [toppings_dto_dto_1.ToppingsDto]),
    __metadata("design:returntype", Promise)
], ToppingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/toppings.schema").Toppings] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ToppingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/:id'),
    openapi.ApiResponse({ status: 201, type: require("../schemas/toppings.schema").Toppings }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, toppings_dto_dto_1.ToppingsDto]),
    __metadata("design:returntype", void 0)
], ToppingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/toppings.schema").Toppings }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToppingsController.prototype, "delete", null);
ToppingsController = __decorate([
    (0, common_1.Controller)('Toppings'),
    __metadata("design:paramtypes", [toppings_service_1.ToppingsService])
], ToppingsController);
exports.ToppingsController = ToppingsController;
//# sourceMappingURL=toppings.controller.js.map