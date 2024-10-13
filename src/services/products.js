import { productModel } from '../db/model.js';

export const getAllProducts = () => {
  return productModel.find();
};
