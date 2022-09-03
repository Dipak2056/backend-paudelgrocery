import customerSchema from "./customer.schema.js";

//post customer
export const insertCustomer = (obj) => {
  return customerSchema(obj).save();
};

//get customer
//@filter must be an object
//get customer by id
export const getCustomerById = (_id) => {
  return customerSchema.findById(_id);
};

//update customer
//@ filter and @obj must be an object
export const updateCustomer = (filter, obj) => {
  return customerSchema.findOneAndUpdate(filter, obj, { new: true });
};
