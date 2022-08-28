import express from "express";
import { getAllCategory } from "../models/categories-model/categories.model.js";
const router = express.Router();
//to get all the categories
router.get("/", async (req, res) => {
  const allCategories = await getAllCategory();
  res.send(allCategories);
});

export default router;
