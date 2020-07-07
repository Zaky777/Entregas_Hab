require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getConnection } = require('../../db');
const { generateError } = require('../../helpers');
const { loginSchema } = require('../../validations/login');

async function loginUser(req, res, next) {
  let connection;

  try {
    await loginSchema.validateAsync(req.body);

    const { email, password } = req.body;
    connection = await getConnection();
    const [
      dbUser
    ] = await connection.query(
      'SELECT id, nombre, email, password, role  FROM usuarios WHERE email=? AND active=true',
      [email]
    );

    if (!dbUser.length) {
      throw generateError(
        'No hay ningun usuario con ese correo electrónico, comprueba que estás registrado y sino registrate! es gratis!',
        404
      );
    }

    const [user] = dbUser;

    /*  const passwordsMath = await bcrypt.compare(password, user.password); */
    /* 
    if (!passwordsMath) {
      throw generateError('Password false', 401);
    } */
    console.log(user);
    const tokenPayload = {
      id: user.id,
      nombre: user.nombre,
      email: user.email,
      role: user.role
    };
    const token = jwt.sign(tokenPayload, process.env.SECRET, {
      expiresIn: '60d'
    });

    res.send({
      status: 'ok',
      message: 'Login okey!',
      email: user.email,
      id: user.id,
      nombre: user.nombre,
      role: user.role,
      data: { token }
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = { loginUser };
