import mongoose, { Document } from 'mongoose';
export declare type menusDocument = menus & Document;
export declare class menus {
    name: string;
    description: string;
    price: number;
    toppings: mongoose.Types.ObjectId[];
}
export declare const menusSchema: mongoose.Schema<mongoose.Document<menus, any, any>, mongoose.Model<mongoose.Document<menus, any, any>, any, any, any, any>, {}, {}, {}, {}, "type", mongoose.Document<menus, any, any>>;
