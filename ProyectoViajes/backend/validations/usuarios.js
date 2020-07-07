const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const passwordSchema = Joi.string()
  .min(2)

  .max(100)
  .required()
  .error(new Error('El campo debe tener entre 2 y 100 caracteres'));

const newUserSchema = Joi.object().keys({
  nombre: Joi.string()

    .max(100)
    .min(2)
    .required()
    .error(new Error('Tu nombre debe tener entre 2 y 100 caracteres')),
  apellidos: Joi.string()

    .max(100)
    .min(2)
    .required()
    .error(new Error('Tus apellidos deben tener entre 2 y 100 caracteres')),
  email: Joi.string()
    .email()
    .required()
    .error(new Error('El correo electrónico no es válido')),
  password: passwordSchema
});
module.exports = {
  newUserSchema,
  passwordSchema
};
