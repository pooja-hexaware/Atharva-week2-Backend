import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Toppings } from './toppings.schema';

export type menusDocument = menus & Document;


@Schema()
export class menus {
   
   @Prop()
   name: string; 
   
   @Prop()
   description: string; 
   
   @Prop()
   price: number; 
   
   @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref:Toppings.name}]})
   toppings: mongoose.Types.ObjectId[]; 
   
}

export const menusSchema = SchemaFactory.createForClass(menus);