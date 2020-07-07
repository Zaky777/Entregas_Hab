require('dotenv').config();
const { getConnection } = require('../../db');
const { generateError } = require('../../helpers');
async function deleteUser(req, res, next) {
  let connection;
  try {
    const { id } = req.params;

    connection = await getConnection();

    if (req.auth.rol !== 'admin') {
      throw generateError('no tienes los permisos requeridos', 400);
    }

    await connection.query('delete from USUARIOS where id=?', [id]);

    res.send({
      status: 'ok',
      message: `El usuario con id ${id} ha sido borrado.`
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
module.exports = { deleteUser };
