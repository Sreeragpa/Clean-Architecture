import express, { NextFunction } from "express";
import { ProductController } from "../../controllers/ProductController";
import { ProductRepository } from "../../repository/productRepository";
import { ProductUsecase } from "../../usecase/product.usecase";
import { ProductModel } from "../models/productModel";
// const controller = new ProductController()
const productRepository = new ProductRepository(ProductModel);
const productUsecase = new ProductUsecase(productRepository);
const productController = new ProductController(productUsecase)


const router = express.Router();

router.post('/',(req,res,next)=>{
    productController.onCreateProduct(req,res,next)
});
// router.get('/products',controller.onGetProduct);
// router.patch('/products/:id',controller.onUpdateStock);

router.get('/test',(req,res)=>{
    res.send("ProductAPI is running")
})
export default router