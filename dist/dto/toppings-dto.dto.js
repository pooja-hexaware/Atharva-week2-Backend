"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToppingsDto = void 0;
const openapi = require("@nestjs/swagger");
class ToppingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, price: { required: true, type: () => Number } };
    }
}
exports.ToppingsDto = ToppingsDto;
//# sourceMappingURL=toppings-dto.dto.js.map