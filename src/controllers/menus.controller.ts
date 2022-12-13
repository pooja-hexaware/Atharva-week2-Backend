import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { menusDto } from '../dto/menus-dto.dto';
import { menusService } from '../services/menus.service';


@Controller('menus')
export class menusController {
    constructor(private readonly menusService: menusService) { }

    @Post()
    async create(@Body() menusDto: menusDto) {
        const res = this.menusService.create(menusDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.menusService.findAll();
    }

    @Get('/:id')
    async findMenuToppings(@Param('id') id:any)
    {
        return this.menusService.findMenuToppings(id);
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() menusDto: menusDto) {
        return this.menusService.update(id, menusDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.menusService.delete(id);
    }
}