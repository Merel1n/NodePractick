import { Router } from 'express';

const router = Router();

import {
  getAllProductController,
  getProductByIdController,
  createProductController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

router.get('/', ctrlWrapper(getAllProductController));

router.get('/:productId', ctrlWrapper(getProductByIdController));

router.post('/', ctrlWrapper(createProductController));

router.patch('/:productId', ctrlWrapper(patchProductController));

export default router;
