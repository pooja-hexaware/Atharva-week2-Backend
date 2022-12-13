import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { menus } from 'src/schemas/menus.schema';
import { Restaurants, RestaurantsDocument } from 'src/schemas/restaurants.schema';

@Injectable()
export class RestaurantsRepo {
    constructor(
        @InjectModel(Restaurants.name)
        private readonly restaurantsModel: Model<RestaurantsDocument>) {}

    async create(data): Promise<Restaurants> {
        return new this.restaurantsModel(data).save();
    }

    async findAll(): Promise<Restaurants[]> {
        return this.restaurantsModel.find({})
            .exec();
    }

    findRestaurantMenu(id: any) {
        const filter = {_id:id};
        return this.restaurantsModel.find(filter).populate('menu');
    }

    async update(restaurantsId, data): Promise<Restaurants> {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findOneAndUpdate(filter, data);
    }

    async delete(restaurantsId): Promise<Restaurants> {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findByIdAndDelete(restaurantsId);
    }
}