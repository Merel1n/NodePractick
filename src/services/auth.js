import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { UsersCollection } from '../db/user.js';

export const userRegister = async (userDates) => {
  const isUserExisting = await UsersCollection.findOne({
    email: userDates.email,
  });

  if (isUserExisting) {
    throw createHttpError(409, 'User is exist');
  }

  const password = await bcrypt.hash(userDates.password, 10);

  return await UsersCollection.create({ ...userDates, password });
};

export const usetGetAll = async () => {
  return await UsersCollection.find();
};
