import { IProduct } from "../../entities/Product";
import { ICreateProductRequest } from "../IProduct.interface";

export interface IProductRepository{
    create(data: ICreateProductRequest): Promise<IProduct>;
    update(id: number, stock: number): Promise<IProduct>;
    find(limit: number, offset: number): Promise<IProduct[]>;
}