import mongoose from "mongoose";
export declare class RestaurantsDto {
    name: string;
    address: string;
    pin_code: string;
    store_contact: string;
    kitchen_contact: string;
    menu: mongoose.Types.ObjectId[];
}
