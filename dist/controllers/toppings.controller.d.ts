import { ToppingsDto } from '../dto/toppings-dto.dto';
import { ToppingsService } from '../services/toppings.service';
export declare class ToppingsController {
    private readonly toppingsService;
    constructor(toppingsService: ToppingsService);
    create(toppingsDto: ToppingsDto): Promise<import("../schemas/toppings.schema").Toppings>;
    findAll(): Promise<import("../schemas/toppings.schema").Toppings[]>;
    update(id: string, toppingsDto: ToppingsDto): Promise<import("../schemas/toppings.schema").Toppings>;
    delete(id: string): Promise<import("../schemas/toppings.schema").Toppings>;
}
