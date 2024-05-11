import express from "express";
import dotenv from "dotenv";

import productRouter from "../routes/ProductRouter"

import { dbConnect } from "./dbConnection";

// Load environment variables from .env file
dotenv.config();

 const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRouter);



export default app;