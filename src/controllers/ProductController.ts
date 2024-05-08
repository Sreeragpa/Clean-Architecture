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
            
        } catch (error) {
            next(error)
        }
    }
    async onUpdateStock(req:Request, res: Response, next: NextFunction){}
}