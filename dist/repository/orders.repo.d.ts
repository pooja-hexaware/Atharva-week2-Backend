import { Model } from 'mongoose';
import { Orders, OrdersDocument } from 'src/schemas/orders.schema';
export declare class OrdersRepo {
    private readonly ordersModel;
    constructor(ordersModel: Model<OrdersDocument>);
    create(data: any): Promise<Orders>;
    findAll(): Promise<Orders[]>;
    update(ordersId: any, data: any): Promise<Orders>;
    delete(ordersId: any): Promise<Orders>;
}
