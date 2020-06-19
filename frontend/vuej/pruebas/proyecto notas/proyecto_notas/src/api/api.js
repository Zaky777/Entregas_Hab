const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "antonio",
  password: "patronus",
  database: "notas1",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("DATABASE UP");
});

const PORT = 3050;

app.listen(PORT, () => console.log("API UP"));

// RECOGIENDO TODAS LAS NOTAS
app.get("/notas", (req, res) => {
  const sql = "SELECT * FROM lista_notas";
  connection.query(sql, (error, results) => {
    //si hay error q lo muestre
    if (error) throw error;
    //comprobar q la respuesta no esta vacia
    if (results.length > 0) {
      res.json(results);
    }
    //en caso de que venga vacia...
    else {
      res.send("Lista de notas no encontrada");
    }
  });
});
//ACTUALIZANDO UNA NOTA
app.put("/notas/update/:id", (req, res) => {
  //texto e id que nos llega
  const text = req.body.texto;
  const id = req.body.id;
  const sql = `UPDATE lista_notas SET texto='${texto}' WHERE id=${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Nota actualizada");
  });
});

//borrando una nota
app.delete("/notas/del/:id", (req, res) => {
    //guardamos la id q nos llega
  const id = req.params.id
  //secuencia sql ejecutar
  const sql = `DELETE FROM lista_notas WHERE id=${id}`
  connection.query(sql,error => {
      if(error) throw error
      res.send('nota borrada')
  }),
});
  //función para borrar notas
  deleteNotes (data){
      this.id = data
      axios.delete('http://localhost:3050/notas/del',{
          id: this.id
      })
      .then(function(response){
          console.log(response)
      })
      .catch (function(error){
          console.log(error)
      })
  }


//añadir nota

app.post("/notas/add", (req, res) => {
  //secuencia sql

  const sql = "INSERT INTO lista_notas SET ?";

  //objeto q recibe la bbdd
  const newNote = {
    texto: req.body.texto,
  };
  connection.query(sql, newNote, (error) => {
    if (error) throw error;
    res.send("notita creada");
  });
});
