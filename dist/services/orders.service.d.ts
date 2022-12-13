import { OrdersRepo } from '../repository/orders.repo';
import { Orders } from '../schemas/orders.schema';
export declare class OrdersService {
    private readonly ordersRepo;
    constructor(ordersRepo: OrdersRepo);
    findAll(): Promise<Orders[]>;
    create(data: any): Promise<Orders>;
    update(ordersId: any, data: any): Promise<Orders>;
    delete(ordersId: any): Promise<Orders>;
}
