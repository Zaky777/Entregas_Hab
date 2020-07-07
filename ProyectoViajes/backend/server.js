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

const { userIsAuthenticated } = require('./middlewares/auth.js');
const { userIsAdmin } = require('./middlewares/auth.js');
/* 
const { newRating } = require('./controllers/VALORACIONES/new_rating');

const { viewRating } = require('./controllers/VALORACIONES/view_rating');

const { viewRanking } = require('./controllers/VALORACIONES/view_ranking');
 */
// ################## RUTAS DE USUARIO ##############################

app.post('/usuarios', newUser); // Crear nuevo usuario
app.post('/usuarios/login', loginUser); // Hacer login
app.get('/usuarios/validar', validateUser); // Validar cuenta
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
/* 
//############### RUTAS DE VALORACIONES #################################
app.post('/valoraciones/:id', userIsAuthenticated, newRating); // Nueva valoracion
app.get('/valoraciones/ver/:id', viewRating); // Ver valoración de un concurso
app.get('/valoraciones/ranking', viewRanking); // Ver ranking de concursos

//############## BUSCADOR ############################################
app.get('/busqueda'); // Buscador completo

// ############ Middlewares de error ##################################
 */
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

app.listen(port, () => {
  console.log(`Servidor funcionando en  http://localhost:${port}`);
});
