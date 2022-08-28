import express from "express";
import { getAllProducts } from "../models/product-models/products.model.js";
const router = express.Router();

//to get all the products
router.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.send(allProducts);
});

export default router;
