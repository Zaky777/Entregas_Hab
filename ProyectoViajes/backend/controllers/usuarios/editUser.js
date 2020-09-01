require('dotenv').config();

const { getConnection } = require('../../db');
const { updateUserSchema } = require('../../validations/editUser');
const {
  generateError,
  processAndSavePhoto,
  deletePhoto
} = require('../../helpers');

async function editUser(req, res, next) {
  let connection;
  try {
    await updateUserSchema.validateAsync(req.body);
    connection = await getConnection();
    const { id } = req.params;

    const { nombre, apellidos, email, descripcion } = req.body;

    const [
      current
    ] = await connection.query(
      `SELECT id, url_foto  FROM usuarios  WHERE id =?`,
      [id]
    );
    console.log(current);

    if (!current.length) {
      throw generateError(`El usuario con id  ${id} no existe`, 404);
    }

    if (current[0].id !== req.auth.id) {
      throw generateError('No tienes permisos para editar este usuario', 401);
    }

    let savedFileName;
    console.log(req.files);
    console.log(req.files.url_foto);

    if (req.files && req.files.url_foto) {
      try {
        savedFileName = await processAndSavePhoto(req.files.url_foto);
        if (current && current.url_foto) {
          await deletePhoto(current.url_foto);
        }
      } catch (error) {
        throw generateError('No se puede procesar la imagen.', 400);
      }
    } else {
      savedFileName = current.url_foto;
    }

    await connection.query(
      ` UPDATE usuarios SET nombre=?, apellidos=?, email=?, descripcion=?, url_foto=? WHERE id=?`,
      [nombre, apellidos, email, descripcion, savedFileName, id]
    );

    res.send({
      status: 'ok',
      message: 'Has actualizado tus datos'
    });
  } catch (error) {
    next(error);
    console.log(error);
  } finally {
    if (connection) connection.release();
  }
}
module.exports = { editUser };
