import { IProductInterator } from "../interfaces/IProductInteractor";

export class ProductInteractor implements IProductInterator{
    createProduct(input: any) {
        throw new Error("Method not implemented.");
    }
    updateStock(id: number, stock: number) {
        throw new Error("Method not implemented.");
    }
    getProduct(limit: number, offset: number) {
        throw new Error("Method not implemented.");
    }
    
}