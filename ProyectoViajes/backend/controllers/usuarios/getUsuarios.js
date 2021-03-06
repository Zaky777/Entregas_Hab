require('dotenv').config();
const { getConnection } = require('../../db');

async function getUsuarios(req, res, next) {
  try {
    const { id } = req.params;
    const connection = await getConnection();

    const [response] = await connection.query('SELECT * from usuarios', [id]);

    connection.release();

    res.send({
      status: 'ok',
      data: response
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsuarios
};
