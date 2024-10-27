import Joi from 'joi';

export const registerUserShema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username must be at least {#limit} characters long',
    'string.max': 'Username must be at most {#limit} characters long',
    'any.required': 'Username is required',
  }),
  email: Joi.string()
    .email()
    .required()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .messages({
      'string.pattern.base': 'Please enter a valid email address',
      'any.required': 'email is required',
    }),
  password: Joi.string().min(8).max(20).required().messages({
    'string.min': 'Password must be at least {#limit} characters long',
    'any.required': 'password is required',
  }),
});
