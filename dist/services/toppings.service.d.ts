import { ToppingsRepo } from '../repository/toppings.repo';
import { Toppings } from '../schemas/toppings.schema';
export declare class ToppingsService {
    private readonly toppingsRepo;
    constructor(toppingsRepo: ToppingsRepo);
    findAll(): Promise<Toppings[]>;
    create(data: any): Promise<Toppings>;
    update(toppingsId: any, data: any): Promise<Toppings>;
    delete(toppingsId: any): Promise<Toppings>;
}
