require('dotenv').config();
const { getConnection } = require('../../db');
const {
  generateError,
  processAndSavePhoto,
  deletePhoto
} = require('../../helpers');
const { newLugarSchema } = require('../../validations/lugares_experiencias');

async function newLugar(req, res, next) {
  let connection;

  try {
    connection = await getConnection();
    await newLugarSchema.validateAsync(req.body);
    const { id } = req.auth;
    const { localizacion, fotos, pais, enclaves_de_interes, fecha } = req.body;

    const [
      current
    ] = await connection.query(
      ` SELECT id, imagen FROM lugares_experiencias WHERE id=?`,
      [id]
    );

    let savedFileName;

    if (req.files && req.files.imagen) {
      try {
        savedFileName = await processAndSavePhoto(req.files.imagen);

        if (current && current.imagen) {
          await deletePhoto(current.imagen);
        }
      } catch (error) {
        throw generateError('No se puede procesar la imagen. ', 400);
      }
    } else {
      savedFileName = current.imagen;
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
      `INSERT INTO lugares_experiencias (id,localizacion,fotos,pais, enclaves_de_interes)
      VALUES  (?,?,?,?,?,?,?,NOW())`,

      [id, localizacion, fotos, pais, enclaves_de_interes]
    );

    res.send({
      status: 'ok',
      message: 'Viaje publicado correctamente'
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
module.exports = { newLugar };
