"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menusModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menus_controller_1 = require("../controllers/menus.controller");
const menus_service_1 = require("../services/menus.service");
const menus_repo_1 = require("../repository/menus.repo");
const menus_schema_1 = require("../schemas/menus.schema");
let menusModule = class menusModule {
};
menusModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: menus_schema_1.menus.name, schema: menus_schema_1.menusSchema }])
        ],
        controllers: [menus_controller_1.menusController],
        providers: [menus_service_1.menusService, menus_repo_1.menusRepo],
        exports: [menus_service_1.menusService, menus_repo_1.menusRepo]
    })
], menusModule);
exports.menusModule = menusModule;
//# sourceMappingURL=menus.module.js.map