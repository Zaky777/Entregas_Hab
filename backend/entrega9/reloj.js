const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 20) {
    return next(new Error("Sobando"));
  }

  res.send(`SON LAS ${hour} 👋`);
});

app.use((error, req, res, next) => {
  res.status(503).send("q va colega...");
});

app.use((req, res) => {
  res.status(404).send("ERROR");
});

app.listen(3000, () => {
  console.log("Servidor web iniciado");
});
