export interface IProductUsecase{
    createProduct(input: any): any
    updateStock(id: number, stock: number): any
    getProduct(limit: number, offset: number): any
}