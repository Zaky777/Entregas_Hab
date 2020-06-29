const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const jwt = require("jsonwebtoken");
const config = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("llave", config.llave);

//conectamos la bbdd
const connection = mysql.createConnection({
  host: "localhost",
  user: "antonio",
  password: "patronus",
  database: "VIAJES_DIFERENTES",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("DATABASE UP");
});

const PORT = 3051;

app.listen(PORT, () => console.log("API GUAy"));

app.get("/", (req, res) => {
  res.send("ee");
});

//función para recuperar todos los usuarios de la bbdd
app.get("/usuarios", (req, res) => {
  // SECUENCIA SQL
  const sql = "SELECT * FROM usuarios";
  // CONEXIÓN
  connection.query(sql, (error, results) => {
    // SI SALE MAL
    if (error) throw error;
    // SI HAY RESULTADOS
    if (results.length > 0) {
      res.json(results);
    }
    // SI NO HAY NADA
    else {
      res.send("No hay usuarios");
    }
  });
});
//
//
//
//
//
//
//
//FUNCIÓN PARA EDITAR UN CLIENTE!!!!
app.put("/usuarios/update/:id", (req, res) => {
  const { id } = req.body;
  const { nombre } = req.body;
  const { apellidos } = req.body;
  const { fecha_nacimiento } = req.body;
  const { alias } = req.body;
  const { email } = req.body;
  const { contraseña } = req.body;
  const { lugares_visitados } = req.body;
  const { foto_perfil } = req.body;

  const sql = `UPDATE usuarios SET nombre='${nombre}', apellidos='${apellidos}', fecha_nacimiento='${fecha_nacimiento}', alias='${alias},'email='${email}',contraseña='${contraseña},lugares_visitados='${lugares_visitados}', foto_perfil='${foto_perfil}' WHERE id = ${id}`;

  connection.query(sql, (error) => {
    //SI SALE MAL
    if (error) {
      throw error;
    } else {
      res.send("Usuario editado! ");
    }
  });
});
//
//
//
//
//
//
//
//función para recuperar todos los lugares de la bbdd
app.get("/lugares_experiencias", (req, res) => {
  // SECUENCIA SQL
  const sql = "SELECT * FROM lugares_experiencias";
  // CONEXIÓN
  connection.query(sql, (error, results) => {
    // SI SALE MAL
    if (error) throw error;
    // SI HAY RESULTADOS
    if (results.length > 0) {
      res.json(results);
    }
    // SI NO HAY NADA
    else {
      res.send("No hay lugares");
    }
  });
});
//
//
//
//
//
//
//
//función registro de nuevos usuarios
app.post("/registro", (req, res) => {
  //SECUENCIA SQL
  const sql = "INSERT INTO usuarios SET ?";

  const newUser = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    fecha_nacimiento: req.body.fecha_nacimiento,
    alias: req.body.alias,
    email: req.body.email,
    contraseña: req.body.contraseña,
    lugares_visitados: req.body.lugares_visitados,
    foto_perfil: req.body.foto_perfil,
  };
  //CONEXIÓN
  connection.query(sql, newUser, (error) => {
    //SI SALE MAL
    if (error) {
      throw error;
    } else {
      res.send("registro completado :)");
    }
  });
});
//
//
//
//
//
//
//
//función registro de nuevos VIAJES de los usuarios
app.post("/lugares_nuevos", (req, res) => {
  //SECUENCIA SQL
  const sql = "INSERT INTO lugares_experiencias SET ?";

  const newLugar = {
    localizacion: req.body.localizacion,
    fotos: req.body.fotos,
    pais: req.body.pais,
    valoracion_media: req.body.valoracion_media,
    enclaves_de_interes: req.body.enclaves_de_interes,
    fecha: req.body.fecha,
  };
  //CONEXIÓN
  connection.query(sql, newLugar, (error) => {
    //SI SALE MAL
    if (error) {
      throw error;
    } else {
      res.send("registro completado :)");
    }
  });
});
//
//
//
//
//
//
//
//FUNCIÓN PARA BORRAR UN USUARIO
app.delete("/usuarios/del/:id", (req, res) => {
  const { id } = req.params;
  //Secuencia SQL
  const sql = `DELETE FROM usuarios WHERE id = ${id}`;

  //Conexión donde enviamos la query y tenemos respuesta
  connection.query(sql, (error) => {
    //Si sale mal
    if (error) {
      throw error;
      //Si sale bien
    } else {
      res.send("Cliente borrado");
    }
  });
});
//
//
//
//
//
//
//
//metodo login que crea el token
app.post("/auth", (req, res) => {
  const email = req.body.email;
  const contraseña = req.body.contraseña;

  // usuario debe ser unico y deberia ser un email

  const sql = `SELECT * FROM usuarios WHERE email='${email}' AND contraseña='${contraseña}'`;
  //conexión a la bbdd
  connection.query(sql, (error, results) => {
    console.log("hola");
    let admin = null;
    if (error) throw error;
    if (results.length > 0) {
      const payload = {
        check: true,
      };
      if (results[0].admin === 1) {
        admin = true;
      } else {
        admin = false;
      }
      const token = jwt.sign(payload, app.get("llave"), {
        expiresIn: "1 day",
      });
      res.json({
        mensaje: "Autenticacion correcta",
        token: token,
        admin: admin,
      });
    } else {
      console.log("datos incorrectos");
    }
  });
});
