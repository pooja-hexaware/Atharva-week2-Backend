import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdersDto } from '../dto/orders-dto.dto';
import { OrdersService } from '../services/orders.service';


@Controller('Orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    async create(@Body() ordersDto: OrdersDto) {
        const res = this.ordersService.create(ordersDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.ordersService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() ordersDto: OrdersDto) {
        return this.ordersService.update(id, ordersDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.ordersService.delete(id);
    }
}