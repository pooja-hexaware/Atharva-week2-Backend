import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from '../controllers/orders.controller';
import { OrdersService } from '../services/orders.service';
import { OrdersRepo } from '../repository/orders.repo';
import { Orders, OrdersSchema } from '../schemas/orders.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Orders.name, schema: OrdersSchema }])
    ],
    controllers: [OrdersController],
    providers: [OrdersService, OrdersRepo],
    exports: [OrdersService, OrdersRepo]
  })
  export class OrdersModule { }