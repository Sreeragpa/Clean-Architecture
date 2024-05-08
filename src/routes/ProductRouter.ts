import express from "express";
import { ProductController } from "../controllers/ProductController";

const controller = new ProductController()

const router = express.Router();

router.post('/products',controller.onCreateProduct);
router.get('/products',controller.onGetProduct);
router.patch('/products/:id',controller.onUpdateStock);

export default router