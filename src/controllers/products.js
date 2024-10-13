import createHttpError from 'http-errors';
import {
  getAllProducts,
  getProductById,
  createProduct,
} from '../services/products.js';

export const getAllProductController = async (req, res) => {
  const data = await getAllProducts();

  res.send({
    status: 200,
    message: 'Successfully found products!',
    data: data,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) {
    throw createHttpError(404, 'product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: product,
  });
};

export const createProductController = async (req, res) => {
  console.log(req.body);
  const newProduct = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: newProduct,
  });
};
