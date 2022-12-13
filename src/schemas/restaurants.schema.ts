import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { menus } from './menus.schema';

export type RestaurantsDocument = Restaurants & Document;
const MongooseSchema = mongoose.Schema;

@Schema()
export class Restaurants {
   
   @Prop()
   name: string; 
   
   @Prop()
   address: string; 
   
   @Prop()
   pin_code: string; 
   
   @Prop()
   store_contact: string; 
   
   @Prop()
   kitchen_contact: string; 
   
   @Prop({type:[{type:MongooseSchema.Types.ObjectId, ref:menus.name}]})
   menu: mongoose.Types.ObjectId[]; 
   
}

export const RestaurantsSchema = SchemaFactory.createForClass(Restaurants);