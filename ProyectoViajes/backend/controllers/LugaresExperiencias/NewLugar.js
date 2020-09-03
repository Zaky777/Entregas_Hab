require('dotenv').config();
const { getConnection } = require('../../db');
const {
  generateError,
  processAndSavePhoto,
  deletePhoto
} = require('../../helpers');
/* const { newLugarSchema } = require('../../validations/lugares_experiencias');
 */
async function newLugar(req, res, next) {
  let connection;

  try {
    connection = await getConnection();
    /* await newLugarSchema.validateAsync(req.body); */
    const { id } = req.params;
    const { localizacion, pais, enclaves_de_interes, fecha } = req.body;

    const [
      current
    ] = await connection.query(
      ` SELECT id FROM lugares_experiencias WHERE id=?`,
      [id]
    );

    let savedFileName;
    console.log(req.files);
    console.log(req.files.fotos);

    if (req.files && req.files.fotos) {
      try {
        savedFileName = await processAndSavePhoto(req.files.fotos);

        if (current && current.fotos) {
          await deletePhoto(current.fotos);
        }
      } catch (error) {
        throw generateError('No se puede procesar la imagen. ', 400);
      }
    } else {
      savedFileName = current[0].fotos;
    }

    const [
      existingLugar
    ] = await connection.query(
      'SELECT localizacion FROM lugares_experiencias WHERE localizacion=?',
      [localizacion]
    );
    if (existingLugar.length) {
      throw generateError('Este viaje ya existe', 409);
    }
    await connection.query(
      `INSERT INTO lugares_experiencias (id,localizacion,fotos,pais, enclaves_de_interes, fecha)
      VALUES  (?,
        ?,
        ?,
        ?,
        ?, ?)`,
      [id, localizacion, savedFileName, pais, enclaves_de_interes, fecha]
    );

    res.send({
      status: 'ok',
      message: 'Viaje publicado correctamente'
    });
  } catch (error) {
    next(error);
    console.log(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
module.exports = { newLugar };
