import productsSchema from "./products.schema.js";

//to get all the products
export const getAllProducts = (filter) => {
  return productsSchema.find(filter);
};

//@ filter must be an object
export const getProductsByCategory = (arg) => {
  return productsSchema.find({
    catId: {
      $in: arg,
    },
  });
};
