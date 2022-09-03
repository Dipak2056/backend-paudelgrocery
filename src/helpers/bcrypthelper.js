import bcrypt from "bcryptjs";
const saltRounds = 10;

export const encryptPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};
export const verifyPassword = (normalPassword, hashedPassword) => {
  return bcrypt.compareSync(normalPassword, hashedPassword);
};
