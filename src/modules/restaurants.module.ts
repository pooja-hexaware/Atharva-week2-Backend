import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsController } from '../controllers/restaurants.controller';
import { RestaurantsService } from '../services/restaurants.service';
import { RestaurantsRepo } from '../repository/restaurants.repo';
import { Restaurants, RestaurantsSchema } from '../schemas/restaurants.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Restaurants.name, schema: RestaurantsSchema }])
    ],
    controllers: [RestaurantsController],
    providers: [RestaurantsService, RestaurantsRepo],
    exports: [RestaurantsService, RestaurantsRepo]
  })
  export class RestaurantsModule { }