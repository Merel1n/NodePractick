import createHttpError from 'http-errors';
import {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
} from '../services/products.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductController = async (req, res) => {
  const filter = parseFilterParams(req.query);

  const data = await getAllProducts(filter);

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

export const patchProductController = async (req, res) => {
  const newProduct = await editProduct(req.params.productId, req.body);

  if (!newProduct) {
    throw createHttpError(404, 'product not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully edit a product!',
    data: newProduct,
  });
};
