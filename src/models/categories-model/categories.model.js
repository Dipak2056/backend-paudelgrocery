import categoriesSchema from "./categories.schema.js";

export const getAllCategory = () => {
  return categoriesSchema.find();
};
//@filter must be an object
export const getCategoriesByParentCat = (filter) => {
  return categoriesSchema.find(filter);
};
