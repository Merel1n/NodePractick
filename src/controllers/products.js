import { getAllProducts } from '../services/products.js';

export const getAllProductController = async (req, res) => {
  const data = await getAllProducts();

  res.send({
    status: 200,
    message: 'Successfully found products!',
    data: data,
  });
};
