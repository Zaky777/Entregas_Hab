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

const connection = mysql.createConnection({
  host: "localhost",
  user: "antonio",
  password: "patronus",
  database: "clientes",
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

// FUNCIÓN PARA RECUPERAR TODOS LOS CLIENTES DE LA BBDD
app.get("/clientes", (req, res) => {
  // SECUENCIA SQL
  const sql = "SELECT * FROM lista_clientes";
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
      res.send("No hay clientes");
    }
  });
});
app.post("/add", (req, res) => {
  const sql = "INSERT INTO lista_clientes SET ?";
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa,
  };
  connection.query(sql, (sql, newClient, error) => {
    if (error) throw error;
    res.send("cliente creado");
  });
});

app.delete("/cientes/del/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM lista_clientes WHERE id=${id}`;
  connection.query(sql, (sql, error) => {
    if (error) throw error;
    res.send("cliente borrado ;)");
  });
});
//metodo login que crea el token
app.post("/auth", (req, res) => {
  const usuario = req.body.usuario;
  const contrasena = req.body.contrasena;

  //En realidad el usuario deberia ser unico y deberia ser un email

  const sql = `SELECT * FROM usuarios WHERE usuario='${usuario}' AND contrasena='${contrasena}'`;
  //conexión a la bbdd
  connection.query(sql, (error, results) => {
    console.log("hola");
    let admin = null;
    if (error) throw error;
    if (results.length > 0) {
      const payload = {
        check: true,
      };
      if (results[0].isAdmin === 1) {
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
        isAdmin: admin,
      });
    } else {
      console.log("datos incorrectos");
    }
  });
});
