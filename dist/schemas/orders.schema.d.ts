import mongoose, { Document } from 'mongoose';
export declare type OrdersDocument = Orders & Document;
export declare class Orders {
    restaurant_name: string;
    userName: string;
    address: string;
    pin_code: string;
    contact_number: string;
    selectedItems: string[];
    Amount: number;
    total_price: number;
}
export declare const OrdersSchema: mongoose.Schema<mongoose.Document<Orders, any, any>, mongoose.Model<mongoose.Document<Orders, any, any>, any, any, any, any>, {}, {}, {}, {}, "type", mongoose.Document<Orders, any, any>>;
