import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Orders, OrdersDocument } from 'src/schemas/orders.schema';

@Injectable()
export class OrdersRepo {
    constructor(
        @InjectModel(Orders.name)
        private readonly ordersModel: Model<OrdersDocument>) {}

    async create(data): Promise<Orders> {
        return new this.ordersModel(data).save();
    }

    async findAll(): Promise<Orders[]> {
        return this.ordersModel.find({})
            .exec();
    }

    async update(ordersId, data): Promise<Orders> {
        const filter = { _id: ordersId };
        return this.ordersModel.findOneAndUpdate(filter, data);
    }

    async delete(ordersId): Promise<Orders> {
        const filter = { _id: ordersId };
        return this.ordersModel.findByIdAndDelete(ordersId);
    }
}