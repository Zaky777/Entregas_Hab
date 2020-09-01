require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());

app.use(express.static(path.join(__dirname, 'static')));

//############### Funciones importadas relativas a USUARIOS #######################
const { newUser } = require('./controllers/usuarios/newUser');
const { loginUser } = require('./controllers/usuarios/login');
const { validateUser } = require('./controllers/usuarios/validation');
const { getUser } = require('./controllers/usuarios/getDataUser');
const { editUser } = require('./controllers/usuarios/editUser'); //middlewares para autenticación
const { updatePassword } = require('./controllers/usuarios/editPassword');
const { disableUser } = require('./controllers/usuarios/disable');
const { deleteUser } = require('./controllers/usuarios/delete');
const { getUsuarios } = require('./controllers/usuarios/getUsuarios');

const { userIsAuthenticated } = require('./middlewares/auth.js');
const { userIsAdmin } = require('./middlewares/auth.js');

//
//
//
const { newLugar } = require('./controllers/LugaresExperiencias/NewLugar');
const { editLugar } = require('./controllers/LugaresExperiencias/editLugar');
const { getLugares } = require('./controllers/LugaresExperiencias/getLugares');

// VALORACIONES

const { newRating } = require('./controllers/valoraciones/newRating');
const { getRating } = require('./controllers/valoraciones/getRating');
/* 
const { viewRating } = require('./controllers/valoraciones/view_rating');

const { viewRanking } = require('./controllers/valoraciones/view_ranking');
 */
// ################## RUTAS DE USUARIO ##############################

app.post('/usuarios', newUser); // Crear nuevo usuario
app.post('/usuarios/login', loginUser); // Hacer login
app.get('/usuarios/validar', validateUser); // Validar cuenta
app.get('/usuarios/getUsuarios', getUsuarios);
app.put('/usuarios/editar/:id', userIsAuthenticated, editUser); //Editar usuario
app.get('/usuarios/perfil/:id', userIsAuthenticated, getUser); //Obtener datos de un usuario
app.put('/usuarios/password/:id', userIsAuthenticated, updatePassword); //Cambiar contraseña de usuario
app.put('/usuarios/disable/:id', userIsAuthenticated, disableUser); // Deshabilitar usuario
app.delete(
  '/usuarios/delete/:id',
  userIsAuthenticated,
  userIsAdmin,
  deleteUser
); // Borrar cuenta de usuario

//############### RUTAS DE VALORACIONES #################################
app.get('/getValoraciones/:id', userIsAdmin, getRating);
app.post('/valoraciones/:id', userIsAuthenticated, newRating); // Nueva valoracion
/* app.get('/valoraciones/ver/:id', viewRating); // Ver valoración de un concurso
app.get('/valoraciones/ranking', viewRanking); // Ver ranking de concursos
*/
//############## BUSCADOR ############################################
app.get('/busqueda'); // Buscador completo

// ################## RUTAS DE Lugares ##############################
app.post('/lugares', userIsAuthenticated, newLugar); //Crear lugar (Solo usuarios)
app.put('/lugares/:id', userIsAuthenticated, editLugar);
app.get('/lugaresexp', getLugares);
/* app.delete('/lugares/:id', userIsAuthenticated, deleteLugar); // Borrar Lugares (Solo registrados)
app.get('/lugares', getAllLugares); // Listar todos los Lugares (publico)
app.get('/lugares/:id', getLugar); // Listar lugares individualmente (publico)

app.get('/search', searchLugar); // Busqueda general por palabras

app.get('/searching', search); // Buscador top */

// ############ Middlewares de error ##################################

app.use((error, req, res, next) => {
  res.status(error.httpCode || 500).send({
    status: 'error',
    message: error.message
  });
});

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found'
  });
});
// ########## Middleware subir fotos############

app.listen(port, () => {
  console.log(`Servidor funcionando en  http://localhost:${port}`);
});
