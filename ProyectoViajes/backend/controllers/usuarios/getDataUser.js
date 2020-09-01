require('dotenv').config();

const { getConnection } = require('../../db');
const { generateError } = require('../../helpers');

async function getUser(req, res, next) {
  let connection;

  try {
    connection = await getConnection();

    const { id } = req.auth;

    const [result] = await connection.query(
      `SELECT  nombre, apellidos, email, password, url_foto, descripcion,fecha_registro, role, registrationCode, fecha_creacion_tabla, fecha_modificacion_tabla
           FROM usuarios WHERE id=?`,
      [id]
    );

    if (!result.length) {
      throw generateError(`No existe ningún usuario con ese ${id}`, 404);
    }
    const [userData] = result;

    let payload = {};

    if (
      userData.id_usuario === req.auth.id ||
      req.auth.role === 'admin' ||
      req.auth.role === 'user'
    ) {
      payload.nombre = userData.nombre;
      payload.apellidos = userData.apellidos;
      payload.email = userData.email;
      payload.url_foto = userData.url_foto;
      payload.descripcion = userData.descripcion;
      payload.fecha_registro = userData.fecha_registro;
      payload.role = userData.role;
    } else {
      throw generateError('No tiene permisos requeridos', 401);
    }
    res.send({
      status: 'ok',

      data: payload
    });
    console.log(payload);
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = { getUser };
