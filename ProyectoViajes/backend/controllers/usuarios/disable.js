require('dotenv').config();
const { getConnection } = require('../../db');
const { generateError, randomString } = require('../../helpers');

async function disableUser(req, res, next) {
  let connection;
  try {
    connection = await getConnection();
    const { id } = req.params;
    const [
      current
    ] = await connection.query(' SELECT activo, id FROM USUARIOS where id?', [
      id
    ]);
    if (!current.length) {
      throw generateError(`No existe un usuario con id   ${id}`, 400);
    }

    const registrationCode = randomString(40);

    await connection.query(
      `UPDATE USUARIOS SET activo = 0, codigo_registro=? WHERE id_usuario=?`,
      [registrationCode, id]
    );

    res.send({
      status: 'OK',
      message: 'El usuario ha sido borrado correctamente.'
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}
module.exports = { disableUser };
