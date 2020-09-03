require('dotenv').config();
const { getConnection } = require('../../db');

async function getRating(req, res, next) {
  try {
    const { id } = req.params;
    const connection = await getConnection();

    const [
      valoracion
    ] = await connection.query(
      'SELECT id_lugar, comentario, avg(v.valoracion) as valoracion from valoracion WHERE id_lugar=?',
      [id]
    );

    connection.release();

    res.send({
      status: 'ok',
      data: valoracion
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getRating
};
