import productsSchema from "./products.schema.js";

//to get all the products
export const getAllProducts = (filter) => {
  return productsSchema.find(filter);
};

//to get the product by id
export const getProductById = (_id) => {
  return productsSchema.findById(_id);
};

//@ filter must be an object
export const getProductsByCategory = (arg) => {
  return productsSchema.find({
    catId: {
      $in: arg,
    },
  });
};
