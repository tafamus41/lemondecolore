
import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.js";
const router = express.Router();

/* ------------------------------------------------------- */







// URL: api/products



router.route('/')
.get(getProducts)
.post(createProduct);
router.route('/:id')
.put(updateProduct)
.delete(deleteProduct);

export default router;




