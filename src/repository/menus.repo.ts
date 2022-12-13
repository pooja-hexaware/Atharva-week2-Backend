import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { menus, menusDocument } from 'src/schemas/menus.schema';

@Injectable()
export class menusRepo {
    constructor(
        @InjectModel(menus.name)
        private readonly menusModel: Model<menusDocument>) {}

    async create(data): Promise<menus> {
        return new this.menusModel(data).save();
    }

    async findAll(): Promise<menus[]> {
        return this.menusModel.find({})
            .exec();
    }

    findMenuToppings(id: any) {
        const filter = {_id:id}
        return this.menusModel.find(filter).populate('toppings');
    }

    async update(menusId, data): Promise<menus> {
        const filter = { _id: menusId };
        return this.menusModel.findOneAndUpdate(filter, data);
    }

    async delete(menusId): Promise<menus> {
        const filter = { _id: menusId };
        return this.menusModel.findByIdAndDelete(menusId);
    }
}