import { Router } from 'express';

const router = Router();

import {
  getAllProductController,
  getProductByIdController,
  createProductController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validaBody.js';
import { productCreateSchema, productUpDataSchema } from '../validator/prodacts.js';
import { isValidId } from '../middlewares/isValidId.js';

router.get('/', ctrlWrapper(getAllProductController));

router.get('/:productId', isValidId, ctrlWrapper(getProductByIdController));

router.post('/', validateBody(productCreateSchema), ctrlWrapper(createProductController));

router.patch('/:productId', isValidId, validateBody(productUpDataSchema), ctrlWrapper(patchProductController));

export default router;
