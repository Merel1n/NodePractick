import { userRegister, usetGetAll } from '../services/auth.js';

export const userRegisterController = async (req, res) => {
  const user = await userRegister(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const userGetAll = async (req, res) => {
  const allUsers = await usetGetAll();

  res.send({
    status: 200,
    message: 'Successfully all users',
    data: allUsers,
  });
};
