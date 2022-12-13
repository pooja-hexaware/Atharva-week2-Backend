import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RestaurantsDto } from '../dto/restaurants-dto.dto';
import { RestaurantsService } from '../services/restaurants.service';


@Controller('Restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) { }

    @Post()
    async create(@Body() restaurantsDto: RestaurantsDto) {
        const res = this.restaurantsService.create(restaurantsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.restaurantsService.findAll();
    }

    @Get('/:id')
    async findRestaurantMenus(@Param('id') id:any)
    {
        return this.restaurantsService.findRestaurantMenu(id);
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() restaurantsDto: RestaurantsDto) {
        return this.restaurantsService.update(id, restaurantsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.restaurantsService.delete(id);
    }
}