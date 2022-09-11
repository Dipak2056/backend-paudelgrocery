import Joi from "joi";
import {
  FNAME,
  LNAME,
  PHONE,
  DOB,
  EMAIL,
  PASSWORD,
  validator,
  REQUIREDSTR,
  SHORTSTR,
} from "./validationsConstant.js";

export const newCustomerValidation = (req, res, next) => {
  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    email: EMAIL,
    phone: PHONE,
    dob: DOB,
    password: PASSWORD,
  });
  validator(schema, req, res, next);
};
export const updateCustomerValidation = (req, res, next) => {
  const schema = Joi.object({
    _id: SHORTSTR,
    fName: FNAME,
    lName: LNAME,
    email: EMAIL,
    phone: PHONE,
    dob: DOB,
    password: PASSWORD,
  });
  validator(schema, req, res, next);
};
export const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
  });
  validator(schema, req, res, next);
};
