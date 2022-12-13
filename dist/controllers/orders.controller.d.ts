import { OrdersDto } from '../dto/orders-dto.dto';
import { OrdersService } from '../services/orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(ordersDto: OrdersDto): Promise<import("../schemas/orders.schema").Orders>;
    findAll(): Promise<import("../schemas/orders.schema").Orders[]>;
    update(id: string, ordersDto: OrdersDto): Promise<import("../schemas/orders.schema").Orders>;
    delete(id: string): Promise<import("../schemas/orders.schema").Orders>;
}
