import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export function isValidId(req, res, next) {
  const { productId } = req.params;
  if (isValidObjectId(productId) !== true) {
    return next(createHttpError(400, 'Id is not valid'));
  }
  next();
}
