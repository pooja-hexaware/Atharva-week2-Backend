import mongoose from "mongoose";

export class OrdersDto {
    
   restaurant_name:string
   
   userName: string; 
   
   address: string; 
   
   pin_code: string; 
   
   contact_number:string

   selectedItems:string[];
   
   Amount:number;
   
   total_price: number; 
    
}