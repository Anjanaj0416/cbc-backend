import express from 'express';
import { createProduct, getProducts } from '../controllers/produtController.js';

const ProductRouter = express.Router();

ProductRouter.post("/",createProduct)
ProductRouter.get("/",getProducts)

export default ProductRouter;