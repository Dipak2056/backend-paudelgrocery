import express from "express";
import {
  getAllProducts,
  getProductsByCategory,
} from "../models/product-models/products.model.js";
const router = express.Router();

//to get all the products
router.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.send(allProducts);
});
//to get all the products based on catIds
router.post("/?", async (req, res) => {
  const productsById = await getProductsByCategory(req.body);
  res.send(productsById);
});

//to get all the products by catId

export default router;
