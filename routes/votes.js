const express = require("express");
const VoteController = require("../controllers/votes")
const api = express.Router();


//Endpoints ----------------


//Consultar todos los que no han votado
api.get("/votes", VoteController.getVotes);

//Guardar que una persona vote
api.get("/vote/:id", VoteController.updateVote);

module.exports = api;