import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { menusController } from '../controllers/menus.controller';
import { menusService } from '../services/menus.service';
import { menusRepo } from '../repository/menus.repo';
import { menus, menusSchema } from '../schemas/menus.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: menus.name, schema: menusSchema }])
    ],
    controllers: [menusController],
    providers: [menusService, menusRepo],
    exports: [menusService, menusRepo]
  })
  export class menusModule { }