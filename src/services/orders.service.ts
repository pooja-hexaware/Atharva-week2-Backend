import { Injectable } from '@nestjs/common';
import { OrdersRepo } from '../repository/orders.repo';
import { Orders } from '../schemas/orders.schema';

@Injectable()
export class OrdersService {
    constructor(
        private readonly ordersRepo: OrdersRepo
    ) { }

    async findAll(): Promise<Orders[]> {
        return this.ordersRepo.findAll();
    }

    async create(data): Promise<Orders> {
        data.createddate = new Date();
        return this.ordersRepo.create(data);
    }

    async update(ordersId, data): Promise<Orders> {
        return this.ordersRepo.update(ordersId, data);
    }

    async delete(ordersId): Promise<Orders> {
        return this.ordersRepo.delete(ordersId);
    }
}