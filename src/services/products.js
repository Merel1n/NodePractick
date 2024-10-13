import { productModel } from '../db/model.js';

export const getAllProducts = () => {
  return productModel.find();
};

export const getProductById = (productId) => {
  return productModel.findById(productId);
};

export const createProduct = (newProduct) => {
  return productModel.create(newProduct);
};

export const editProduct = (productId, payload) => {
  return productModel.findOneAndUpdate({ _id: productId }, payload, {
    new: true,
  });
};
