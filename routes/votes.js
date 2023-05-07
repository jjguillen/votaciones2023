const express = require("express");
const VoteController = require("../controllers/votes")
const api = express.Router();


//Endpoints ----------------


//Consultar todas las tareas
api.get("/votes", VoteController.getVotes);

//Modificar tarea por id
api.put("/vote/:id", VoteController.updateVote);

module.exports = api;