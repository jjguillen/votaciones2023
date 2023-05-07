const { restart } = require("nodemon");
const Vote = require("../models/votes");


//Función para sacar todos las personas que no han votado
async function getVotes(req, res) {
    
    try {
        //const votes = await Vote.find({ completed: false }).sort({ created_at: -1});
        const votes = await Vote.find({ voted: false }).sort({ id: 1});


        if (!votes) {
            res.status(400).send("Error al obtener votos de Mongo");
        } else {
            res.status(200).send(votes);
        }

    } catch(error) {
        res.status(500).send(error);
    }
}


//Modificar el voto de una persona
async function updateVote(req, res) {
    //Sacar el id de la url del endpoint
    const idVote = req.params.id;

    //Sacar los cambios del voto en el body de la request
    const bodyJson = req.body;

    try {
        const filter = { id: idVote };
        const update = { voted: true };

        let vote = await Vote.findOneAndUpdate(filter, update);

        if(!vote) {
            res.status(400).send({ msg: "No se ha encontrado esa persona para modificar"});
        } else {
            res.status(200).send("Voto " + idVote + " registrado" );
        }
        
    } catch(error) {
        res.status(500).send(error);
    }

}




module.exports = {
    getVotes,  updateVote
}