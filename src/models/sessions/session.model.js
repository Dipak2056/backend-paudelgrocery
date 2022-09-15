import sessionSchema from "./session.schema.js";

export const insertSession = (obj) => {
  return sessionSchema(obj).save();
};
export const getSession = (filter) => {
  return sessionSchema.findOne(filter);
};
export const deleteSession = (filter) => {
  return sessionSchema.findOneAndDelete(filter);
};
