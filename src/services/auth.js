import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { UsersCollection } from '../db/user.js';
import { SessionsCollection } from '../db/session.js';
import { randomBytes } from 'crypto';

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

export const userLogin = async (userDates) => {
  const user = await UsersCollection.findOne({ email: userDates.email });

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const isEqual = await bcrypt.compare(userDates.password, user.password);

  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }

  await SessionsCollection.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await SessionsCollection.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + 15 * 60 * 1000),
    refreshTokenValidUntil: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });
};

export const usetGetAll = async () => {
  return await UsersCollection.find();
};
