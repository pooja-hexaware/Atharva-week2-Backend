"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsDto = void 0;
const openapi = require("@nestjs/swagger");
class RestaurantsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, address: { required: true, type: () => String }, pin_code: { required: true, type: () => String }, store_contact: { required: true, type: () => String }, kitchen_contact: { required: true, type: () => String }, menu: { required: true, type: () => [require("mongoose").Types.ObjectId] } };
    }
}
exports.RestaurantsDto = RestaurantsDto;
//# sourceMappingURL=restaurants-dto.dto.js.map