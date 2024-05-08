export interface IProductInterator{
    createProduct(input: any): any
    updateStock(id: number, stock: number): any
    getProduct(limit: number, offset: number): any
}