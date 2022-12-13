import mongoose from "mongoose";

export class menusDto {
    
    name: string; 
    
    description: string; 
    
    price: number; 
    
    toppings: mongoose.Types.ObjectId[]; 
    
}