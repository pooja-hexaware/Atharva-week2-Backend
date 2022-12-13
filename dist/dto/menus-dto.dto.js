"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menusDto = void 0;
const openapi = require("@nestjs/swagger");
class menusDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, toppings: { required: true, type: () => [require("mongoose").Types.ObjectId] } };
    }
}
exports.menusDto = menusDto;
//# sourceMappingURL=menus-dto.dto.js.map