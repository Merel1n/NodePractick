import { Router } from 'express';

const router = Router();

import { getAllProductController } from '../controllers/products.js';

router.get('/', getAllProductController);

export default router;
