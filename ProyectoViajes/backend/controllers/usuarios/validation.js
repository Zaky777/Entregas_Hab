require('dotenv').config();

const { getConnection } = require('../../db');
const { generateError } = require('../../helpers');

async function validateUser(req, res, next) {
  let connection;

  try {
    const { code } = req.query;

    connection = await getConnection();

    //Actualizar el usuario
    const [
      result
    ] = await connection.query(
      'UPDATE usuarios SET activo=1,registrationCode=NULL WHERE registrationCode=?',
      [code]
    );
    if (result.affectedRows === 0) {
      throw generateError('Wrong validation', 400);
    }
    res.send({
      status: 'ok',
      message: 'Tu usuario ha sido validado'
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}
module.exports = { validateUser };
