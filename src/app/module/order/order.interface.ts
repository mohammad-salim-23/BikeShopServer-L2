import { Model } from "mongoose";

export interface IOrder {
  userEmail: string;
  productName: string;
  productBrand: string;
  productPrice: number;
  productImage: string;
  quantity: number;
  totalPrice: number;
  paymentStatus: "pending" | "paid" | "failed";
  paymentMethod: "stripe";
  
  }
  export interface OrderModel extends Model<IOrder> {}