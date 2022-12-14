import express from "express";
import { simplyemail } from "../helpers/emailhelper.js";
import {
  getAllProducts,
  getProductsByCategory,
} from "../models/product-models/products.model.js";
const router = express.Router();

//to get all the products
router.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.send(allProducts);
  simplyemail();
});
//to get all the products based on catIds
router.post("/?", async (req, res) => {
  const productsById = await getProductsByCategory(req.body);
  res.send(productsById);
});

export default router;
