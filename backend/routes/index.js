
import express from "express";
const router = express.Router();
import route from "./product.js"

router.use('/api/products', route)

export default router;