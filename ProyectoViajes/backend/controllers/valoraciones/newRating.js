const { newVoteSchema } = require('../../validations/newRating');

require('dotenv').config();
const { getConnection } = require('../../db');
const { generateError } = require('../../helpers');

async function newRating(req, res, next) {
  let connection;

  try {
    connection = await getConnection();
    await newVoteSchema.validateAsync(req.body);

    const id_usuarios = req.auth.id;
    const id = req.params.id;

    const { valoracion, comentario } = req.body;

    const [
      lugar
    ] = await connection.query(
      'SELECT id from lugares_experiencias where id=?',
      [id]
    );
    if (!lugar.length) {
      const error = new Error('Este lugar no existe');
      error.httpCode = 404;
      throw error;
    }
    const [
      current
    ] = await connection.query(
      `SELECT id FROM valoracion WHERE id_usuarios=? AND id_lugar=?`,
      [id, id_usuarios]
    );
    console.log(current);
    if (current.length) {
      throw generateError(
        'Sólo puedes votar una vez cada lugar que has visitado.',
        436
      );
    }

    await connection.query(
      `INSERT INTO valoracion (id_usuarios, 
                            id_lugar, 
                            valoracion, comentario)
      VALUES(?,?,?,?)`,
      [id_usuarios, id, valoracion, comentario]
    );

    res.send({
      status: 'ok',
      message: 'Has valorado esta Experiencia correctamente.'
    });
  } catch (error) {
    console.log(error);
    next(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
module.exports = { newRating };
