import { IProductUsecase } from "../interfaces/usecase/IProduct.usecase";
import { IProductRepository } from "../interfaces/repositories/IProduct.repository";

export class ProductUsecase implements IProductUsecase{
    
    private productRepository: IProductRepository

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }
    async createProduct(input: any) {
        return this.productRepository.create(input)
    }
    async updateStock(id: number, stock: number) {
        return this.productRepository.update(id,stock)
    }
    async getProduct(limit: number, offset: number) {
        return this.productRepository.find(limit,offset)
    }
    
}