import { NextFunction, Request, Response } from "express";
import { IProductInterator } from "../interfaces/IProductInteractor";

export class ProductController{

    private interactor: IProductInterator

    constructor(interactor: IProductInterator){
        this.interactor = interactor
    }
    async onCreateProduct(req: Request, res: Response, next: NextFunction){
        try {
            const body = req.body;

            // Buisness Logic is in interactor
            const data = await this.interactor.createProduct(body)

            res.json(data)
        } catch (error) {
            next(error)
        }
    }
    async onGetProduct(req:Request, res: Response, next: NextFunction){
        try {
            const data = await this.interactor.getProduct(5,1)
        } catch (error) {
            next(error)
        }
    }
    async onUpdateStock(req:Request, res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const stock = req.body.stock;

            const data = await this.interactor.updateStock(id,stock);

            res.json(data);

        } catch (error) {
            next(error)
        }
    }
}