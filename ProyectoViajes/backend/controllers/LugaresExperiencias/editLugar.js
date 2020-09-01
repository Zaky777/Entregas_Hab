require('dotenv').config();

const { getConnection } = require('../../db');
const {
  generateError,
  processAndSavePhoto,
  deletePhoto
} = require('../../helpers');
const { editLugarSchema } = require('../../validations/editLugar');

async function editLugar(req, res, next) {
  let connection;
  try {
    connection = await getConnection();
    await editLugarSchema.validateAsync(req.body);
    const { id } = req.params;
    const { localizacion, pais, foto, enclaves_de_interes } = req.body;

    const [
      current
    ] = await connection.query(
      ` SELECT id_usuarios FROM lugares_experiencias WHERE id=?`,
      [id]
    );
    if (!current.length) {
      throw generateError(`El articulo con el id ${id} no existe`, 404);
    }

    if (current[0].id !== req.auth.id) {
      throw generateError('No tienes permiso para editar este lugar ', 401);
    }

    let savedFileName;

    if (req.files && req.files.imagen) {
      try {
        savedFileName = await processAndSavePhoto(req.files.imagen);

        if (current && current.imagen) {
          await deletePhoto(current.imagen);
        }
      } catch (error) {
        throw generateError(
          'No se puede procesar la imagen. Intentalo más tarde',
          400
        );
      }
    } else {
      savedFileName = current.imagen;
    }

    await connection.query(
      `UPDATE lugares_experiencias SET  
      id=?
      localizacion=?,
      pais=?,
      enclaves_de_interes=?,
      fotos=? WHERE id=?`,
      [id, localizacion, pais, foto, savedFileName, enclaves_de_interes, id]
    );

    res.send({
      status: 'ok',
      message: 'Experiencia modificada correctamente'
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}
module.exports = { editLugar };
