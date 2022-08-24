import productsSchema from "./products.schema.js";

//to get all the products
export const getAllProducts = (filter) => {
  return productsSchema.find(filter);
};
