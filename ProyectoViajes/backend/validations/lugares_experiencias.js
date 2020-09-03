const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
const { generateError } = require('../helpers');

const newLugarSchema = Joi.object().keys({
  localizacion: Joi.string()
    .max(1000)
    .required()
    .error(generateError('Lugar incorrecto', 400)),
  fotos: Joi.required(),

  pais: Joi.string()
    .max(100)
    .required()
    .error(generateError('debes introducir un pais que exista', 400)),
  enclaves_de_interes: Joi.string().max(7000).required(),
  fecha: Joi.date()
    .format('YYYY-MM-DD')
    .utc()
    .error(generateError('Formato de fecha incorrecto', 400))
});
module.exports = { newLugarSchema };
