import { userLogin, userRegister, usetGetAll } from '../services/auth.js';

export const userRegisterController = async (req, res) => {
  const user = await userRegister(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const userLoginController = async (req, res) => {
  const session = await userLogin(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });

  res.send({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
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
