"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersDto = void 0;
const openapi = require("@nestjs/swagger");
class OrdersDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { restaurant_name: { required: true, type: () => String }, userName: { required: true, type: () => String }, address: { required: true, type: () => String }, pin_code: { required: true, type: () => String }, contact_number: { required: true, type: () => String }, selectedItems: { required: true, type: () => [String] }, Amount: { required: true, type: () => Number }, total_price: { required: true, type: () => Number } };
    }
}
exports.OrdersDto = OrdersDto;
//# sourceMappingURL=orders-dto.dto.js.map