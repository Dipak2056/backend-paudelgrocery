import "dotenv/config";
import express from "express";
import { getProductById } from "../models/product-models/products.model.js";
const router = express.Router();
//stripe integration
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

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
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: details.map((item) => {
        return {
          price_data: {
            currency: "aud",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/fail`,
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  //   const products = await getAllProducts({ _id });

  //   res.json({ name: products[0].name, price: products[0].price, qty: quantity });
});

export default router;
