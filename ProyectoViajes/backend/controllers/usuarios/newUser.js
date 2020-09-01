require('dotenv').config();

const bcrypt = require('bcrypt');

const { getConnection } = require('../../db');
const { newUserSchema } = require('../../validations/usuarios');
const {
  generateError /*  sendEmail, randomString */
} = require('../../helpers');

async function newUser(req, res, next) {
  let connection;
  try {
    connection = await getConnection();
    await newUserSchema.validateAsync(req.body);

    const { nombre, apellidos, email, password } = req.body;

    const [
      existingEmail
    ] = await connection.query('SELECT id from usuarios where email=?', [
      email
    ]);

    if (existingEmail.length) {
      throw generateError(
        'Ya existe un usuario registrado con este email, pruebe con otro',
        409
      );
    }

    const dbPassword = await bcrypt.hash(password, 10);

    /* const registrationCode = randomString(40);

    const validationURL = `${process.env.PUBLIC_HOST}/usuarios/validate?code=${registrationCode}`;
 */
    /*   try {
      await sendEmail({
        email: email,
        title: 'Debes validar tu cuenta',
        content: `Para validar tu cuenta en: ${validationURL}`
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error al enviar el correo electrónico..');
    }
 */
    await connection.query(
      `INSERT INTO usuarios (nombre,apellidos,email,password, fecha_registro,role)
      VALUES(?,?,?,?,NOW(),'user')`,

      [nombre, apellidos, email, dbPassword /* , registrationCode */]
    );

    res.send({
      status: 'ok',
      message:
        'Usuario creado correctamente, mira en tu correo electrónico para activar tu cuenta'
    });
  } catch (error) {
    next(error);
    console.log(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
module.exports = { newUser };
