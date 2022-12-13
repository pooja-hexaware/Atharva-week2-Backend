import { Injectable } from '@nestjs/common';
import { menus } from 'src/schemas/menus.schema';
import { RestaurantsRepo } from '../repository/restaurants.repo';
import { Restaurants } from '../schemas/restaurants.schema';

@Injectable()
export class RestaurantsService {
    constructor(
        private readonly restaurantsRepo: RestaurantsRepo
    ) { }

    async findAll(): Promise<Restaurants[]> {
        return this.restaurantsRepo.findAll();
    }

    async findRestaurantMenu(id: any) {
        return this.restaurantsRepo.findRestaurantMenu(id);
    }

    async create(data): Promise<Restaurants> {
        data.createddate = new Date();
        return this.restaurantsRepo.create(data);
    }

    async update(restaurantsId, data): Promise<Restaurants> {
        return this.restaurantsRepo.update(restaurantsId, data);
    }

    async delete(restaurantsId): Promise<Restaurants> {
        return this.restaurantsRepo.delete(restaurantsId);
    }
}