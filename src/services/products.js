import { productModel } from '../db/model.js';

export const getAllProducts = (filter) => {
  const productQuery = productModel.find();
  if (filter.category) {
    productQuery.where('category').equals(filter.category);
  }
  if (filter.minPrice) {
    productQuery.where('price').gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productQuery.where('price').lte(filter.maxPrice);
  }

  return productQuery;
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
