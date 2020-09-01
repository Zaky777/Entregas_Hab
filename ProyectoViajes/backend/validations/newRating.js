const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
/* const { generateError } = require('../helpers'); */

const newVoteSchema = Joi.object().keys({
  valoracion: Joi.number().min(1).max(5).integer().required(),
  comentario: Joi.string()
    .min(2)
    .max(1000000)
    .required()
    .error(new Error('El campo debe tener entre 2 y 10000 caracteres'))
});
module.exports = { newVoteSchema };
