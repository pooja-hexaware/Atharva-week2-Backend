import { Injectable } from '@nestjs/common';
import { menusRepo } from '../repository/menus.repo';
import { menus } from '../schemas/menus.schema';

@Injectable()
export class menusService {
    
    constructor(
        private readonly menusRepo: menusRepo
    ) { }

    async findAll(): Promise<menus[]> {
        return this.menusRepo.findAll();
    }

    findMenuToppings(id: any) {
        return this.menusRepo.findMenuToppings(id);
    }

    async create(data): Promise<menus> {
        data.createddate = new Date();
        return this.menusRepo.create(data);
    }

    async update(menusId, data): Promise<menus> {
        return this.menusRepo.update(menusId, data);
    }

    async delete(menusId): Promise<menus> {
        return this.menusRepo.delete(menusId);
    }
}