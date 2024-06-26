import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
     name: {
        type:String
     },
     description: {
        type:String
     },
     price: {
        type:Number
     },
     stock: {
        type:Number
     },

},{timestamps: true});

export const ProductModel = mongoose.model('Products',ProductSchema)