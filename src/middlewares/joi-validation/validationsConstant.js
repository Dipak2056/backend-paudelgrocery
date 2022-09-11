import Joi from "joi";

export const FNAME = Joi.string().alphanum().required().min(3).max(20);
export const LNAME = Joi.string().alphanum().required().min(3).max(20);
export const EMAIL = Joi.string().email({ minDomainSegments: 2 }).required();
export const PHONE = Joi.string().required().min(10).max(15);
export const DOB = Joi.date().allow(null);
export const DATE = Joi.date();
export const PASSWORD = Joi.string().required();
export const REQUIREDSTR = Joi.string().required();

export const validator = (schema, req, res, next) => {
  const { value, error } = schema.validate(req.body);
  console.log(value);
  if (error) {
    error.status = 200;
    return next(error);
  }
  next();
};
