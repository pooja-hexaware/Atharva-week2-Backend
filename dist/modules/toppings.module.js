"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToppingsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const toppings_controller_1 = require("../controllers/toppings.controller");
const toppings_service_1 = require("../services/toppings.service");
const toppings_repo_1 = require("../repository/toppings.repo");
const toppings_schema_1 = require("../schemas/toppings.schema");
let ToppingsModule = class ToppingsModule {
};
ToppingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: toppings_schema_1.Toppings.name, schema: toppings_schema_1.ToppingsSchema }])
        ],
        controllers: [toppings_controller_1.ToppingsController],
        providers: [toppings_service_1.ToppingsService, toppings_repo_1.ToppingsRepo],
        exports: [toppings_service_1.ToppingsService, toppings_repo_1.ToppingsRepo]
    })
], ToppingsModule);
exports.ToppingsModule = ToppingsModule;
//# sourceMappingURL=toppings.module.js.map