import mongoose from "mongoose";
export declare class menusDto {
    name: string;
    description: string;
    price: number;
    toppings: mongoose.Types.ObjectId[];
}
