import { Router } from 'express';

const router = Router();

import {
  getAllProductController,
  getProductByIdController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

router.get('/', ctrlWrapper(getAllProductController));

router.get('/:productId', ctrlWrapper(getProductByIdController));

export default router;
