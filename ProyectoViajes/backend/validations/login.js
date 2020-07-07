const Joi = require('@hapi/joi');

const passwordSchema = Joi.string()
  .min(2)
  .max(100)
  .required()
  .error(new Error('El campo debe tener entre 2 y 100 caracteres'));

const emailSchema = Joi.string();
email: Joi.string()
  .email()
  .required()
  .error(new Error('El correo electrónico no es válido'));

const loginSchema = Joi.object().keys({
  email: emailSchema,
  password: passwordSchema
});

module.exports = { loginSchema };
