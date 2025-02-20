import { model, Schema } from "mongoose";
import { BikeModel, IBike } from "./bike.interface";

const mongoose = require('mongoose');

const bikeSchema = new Schema<IBike> ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    model: { type: String, required: true },   
    category: { type: String, required: true },
    price: {
        type: Number,
        required: true,
        min: 0
    },

    stock: {
        type: Number,
        required: true,
        min: 0
    },
    availability: { type: Boolean, default: true },
    engineCapacity: {
        type: Number, // cc (Cubic Centimeter)
        required: true,
        min: 50
    },
    color: {
        type: [String], // Multiple colors supported
        required: true
    },
    image: {
        type: String, // URL for bike image
        required: true
    },
    description: {
        type: String,
        trim: true
    },
   
},
{
  timestamps: true
}
);

export const Bike = model<IBike, BikeModel>('Bike', bikeSchema);

