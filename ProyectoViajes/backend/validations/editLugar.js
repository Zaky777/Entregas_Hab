const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
const { generateError } = require('../helpers');

const editLugarSchema = Joi.object().keys({
  localizacion: Joi.string()
    .max(1000)
    .required()
    .error(generateError('Lugar incorrecto', 400)),

  pais: Joi.string()
    .max(100)
    .required()
    .error(generateError('debes introducir un pais que exista', 400)),

  fecha: Joi.date()
    .format('YYYY-MM-DD')
    .utc()
    .error(generateError('Formato de fecha incorrecto', 400))
});

module.exports = { editLugarSchema };
