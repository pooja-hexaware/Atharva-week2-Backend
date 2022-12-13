import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { menus } from './menus.schema';

export type OrdersDocument = Orders & Document;
const MongooseSchema = mongoose.Schema;

@Schema()
export class Orders {

   @Prop()
   restaurant_name:string
   
   @Prop()
   userName: string; 
   
   @Prop()
   address: string; 
   
   @Prop()
   pin_code: string; 
   
   @Prop()
   contact_number:string;

   @Prop()
   selectedItems:string[];

   @Prop()
   Amount:number;
   
   @Prop()
   total_price: number; 
   
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);