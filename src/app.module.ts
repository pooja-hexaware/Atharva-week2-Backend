import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from "./modules/restaurants.module";
import { menusModule } from "./modules/menus.module";
import { ToppingsModule } from "./modules/toppings.module";
import { OrdersModule } from "./modules/orders.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        RestaurantsModule,
        menusModule,
        ToppingsModule,
        OrdersModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
