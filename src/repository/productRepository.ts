
import { IProduct } from "../entities/Product";
import { IProductRepository } from "../interfaces/repositories/IProduct.repository";
import { Model } from "mongoose";

export class ProductRepository implements IProductRepository{
    private productModel: Model<any>
    constructor(productModel:Model<any>){
        this.productModel = productModel
    }
    
    public async create(input:IProduct):Promise<IProduct>{
     try {
        const product = new this.productModel({
            name: input.name,
            description: input.description,
            price: input.price,
            stock: input.stock
        })
        await product.save()
        return product
     } catch (error) {
        throw error
     }
    }
    update(id: number, stock: number): Promise<IProduct> {
        throw new Error("Method not implemented.");
    }
    find(limit: number, offset: number): Promise<IProduct[]> {
        throw new Error("Method not implemented.");
    }
    
}