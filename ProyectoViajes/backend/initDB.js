require('dotenv').config();
const bcrypt = require('bcrypt');
/* const faker = require('faker/locale/es'); */
/* const { random } = require('lodash'); */

const { getConnection } = require('./db');
/* const { formatDateToDB } = require('./helpers');
 */
/* const args = process.argv;
/* 
const addData = args[2] === '--data'; */

async function main() {
  // Get reference to db
  const connection = await getConnection();
  /* 
  
  console.log('Dropping tables');
  await connection.query('DROP TABLE IF EXISTS usuarios');
  await connection.query('DROP TABLE IF EXISTS lugares_experiencias');
  await connection.query('DROP TABLE IF EXISTS valoracion_lugares');
*/
  // Create initial user
  const password = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 10);

  await connection.query(`
        INSERT INTO usuarios(nombre, apellidos, email, password, url_foto, descripcion, fecha_registro, role)
        VALUES("Paco" ,"paco", "paco@paco.com", "paco", " ", " ", '2019-11-11', 'admin')
      `);

  const result = await connection.query('SELECT * FROM usuarios');
  console.log(result[0]);
  connection.release();
  process.exit(); //Se cierra el proceso lanzado (initDB)

  connection.release();
  process.exit();
}

main();
