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
//to get all the products based on catId
router.get("/:catId?", async (req, res) => {
  const { catId } = req.params;
  const productsByCategory = await getProductsByCategory({ catId: catId });
  res.json(productsByCategory);
});

export default router;
