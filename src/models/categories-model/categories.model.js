import categoriesSchema from "./categories.schema.js";

export const getAllCategory = () => {
  return categoriesSchema.find();
};
