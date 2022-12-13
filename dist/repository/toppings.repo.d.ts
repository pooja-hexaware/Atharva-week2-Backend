import { Model } from 'mongoose';
import { Toppings, ToppingsDocument } from 'src/schemas/toppings.schema';
export declare class ToppingsRepo {
    private readonly toppingsModel;
    constructor(toppingsModel: Model<ToppingsDocument>);
    create(data: any): Promise<Toppings>;
    findAll(): Promise<Toppings[]>;
    update(toppingsId: any, data: any): Promise<Toppings>;
    delete(toppingsId: any): Promise<Toppings>;
}
