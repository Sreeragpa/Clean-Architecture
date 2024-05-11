import { NextFunction, Request, Response } from "express";
import { IProductUsecase } from "../interfaces/usecase/IProduct.usecase";

export class ProductController{

    private productUsecase: IProductUsecase

    constructor(productUsecase: IProductUsecase){
        this.productUsecase = productUsecase
    }
    async onCreateProduct(req: Request, res: Response, next: NextFunction){
        try {
            const body = req.body;

            // Buisness Logic is in interactor
            const data = await this.productUsecase.createProduct(body)
            res.json(data)
        } catch (error) {
            next(error)
        }
    }
    async onGetProduct(req:Request, res: Response, next: NextFunction){
        try {
            const data = await this.productUsecase.getProduct(5,1)
        } catch (error) {
            next(error)
        }
    }
    async onUpdateStock(req:Request, res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const stock = req.body.stock;

            const data = await this.productUsecase.updateStock(id,stock);

            res.json(data);

        } catch (error) {
            next(error)
        }
    }
}