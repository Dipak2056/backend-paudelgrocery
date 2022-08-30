import express from "express";
import {
  getAllCategory,
  getCategoriesByParentCat,
} from "../models/categories-model/categories.model.js";
const router = express.Router();
//to get all the categories
router.get("/", async (req, res) => {
  const allCategories = await getAllCategory();
  res.send(allCategories);
});
//to get the categories based on parentCat
router.get("/:parentCatId", async (req, res) => {
  const { parentCatId } = req.params;
  const categoryByCatId = await getCategoriesByParentCat({ parentCatId });
  let subCategoriesArray = [];
  categoryByCatId.forEach((item) => subCategoriesArray.push(item._id));
  res.json(subCategoriesArray);
});

export default router;
