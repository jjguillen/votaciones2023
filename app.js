const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

//Respuestas van a ser json
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Soluciona el problea de CORS.
//Permitir peticiones a la API desde ese dominio. Poner *, para atender peticiones desde cualquier punto.
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header(
      "Content-Type","Content-Length","Server","Date","Access-Control-Allow-Methods","Access-Control-Allow-Origin"
    );
    next();
  });

//Cargar rutas
const votes_routes = require("./routes/votes");

//Rutas base
app.use("/api", votes_routes);

module.exports = app;