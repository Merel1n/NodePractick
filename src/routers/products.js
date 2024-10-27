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
import {
  productCreateSchema,
  productUpDataSchema,
} from '../validator/prodacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

router.get('/', authenticate, ctrlWrapper(getAllProductController));

router.get(
  '/:productId',
  authenticate,
  isValidId,
  ctrlWrapper(getProductByIdController),
);

router.post(
  '/',
  authenticate,
  validateBody(productCreateSchema),
  ctrlWrapper(createProductController),
);

router.patch(
  '/:productId',
  authenticate,
  isValidId,
  validateBody(productUpDataSchema),
  ctrlWrapper(patchProductController),
);

export default router;
