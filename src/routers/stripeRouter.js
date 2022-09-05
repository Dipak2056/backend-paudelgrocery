import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../models/product-models/products.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { items } = req.body;
  const details = [];
  for (let i = 0; i < items.length; i++) {
    let product = await getProductById(items[i]._id);
    const price = product.price;
    const name = product.name;
    const quantity = items[i].quantity;
    details.push({ price, name, quantity });
  }
  //stripe integration part

  //   const products = await getAllProducts({ _id });

  //   res.json({ name: products[0].name, price: products[0].price, qty: quantity });
});

export default router;
