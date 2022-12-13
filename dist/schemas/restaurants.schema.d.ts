import mongoose, { Document } from 'mongoose';
export declare type RestaurantsDocument = Restaurants & Document;
export declare class Restaurants {
    name: string;
    address: string;
    pin_code: string;
    store_contact: string;
    kitchen_contact: string;
    menu: mongoose.Types.ObjectId[];
}
export declare const RestaurantsSchema: mongoose.Schema<mongoose.Document<Restaurants, any, any>, mongoose.Model<mongoose.Document<Restaurants, any, any>, any, any, any, any>, {}, {}, {}, {}, "type", mongoose.Document<Restaurants, any, any>>;
