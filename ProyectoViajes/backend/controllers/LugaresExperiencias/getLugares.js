require('dotenv').config();
const { getConnection } = require('../../db');

async function getLugares(req, res, next) {
  try {
    const { id } = req.params;
    const connection = await getConnection();

    const [response] = await connection.query(
      `SELECT lugares_experiencias.*,
    (SELECT ROUND(AVG(valoracion)) FROM valoracion WHERE id_lugar = lugares_experiencias.id) AS valoracion_media
    from lugares_experiencias
    `,
      [id]
    );
    /* const [vote_media] = await connection.query(`SELECT lugares_experiencias.*,
    (SELECT AVG(valoracion) FROM valoracion WHERE id_lugar = lugares_experiencias.id) AS valoracion_media
    from lugares_experiencias
    `); */
    connection.release();

    res.send({
      status: 'ok',
      data: response
      /*  vote_media */
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLugares
};
