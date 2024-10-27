import { Router } from 'express';
import { validateBody } from '../middlewares/validaBody.js';
import { registerUserShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  userGetAll,
  userLoginController,
  userRegisterController,
} from '../controllers/auth.js';
import { loginUserSchema } from '../validator/auth.js';

const userRouter = Router();

userRouter.post(
  '/register',
  validateBody(registerUserShema),
  ctrlWrapper(userRegisterController),
);

userRouter.get('/usersall', ctrlWrapper(userGetAll));

userRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(userLoginController),
);

export default userRouter;
