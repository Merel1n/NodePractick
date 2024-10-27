import { Router } from 'express';
import { validateBody } from '../middlewares/validaBody.js';
import { registerUserShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { userGetAll, userRegisterController } from '../controllers/auth.js';

const userRouter = Router();

userRouter.post(
  '/register',
  validateBody(registerUserShema),
  ctrlWrapper(userRegisterController),
);

userRouter.get('/usersall', ctrlWrapper(userGetAll));

export default userRouter;
