const mongoose = require("mongoose");

//Esquema de la colleción en Mongo
const Schema = mongoose.Schema;

const VoteSchema = Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    voted: {
        type: Boolean,
        require: true,
        default: false
    }
});

module.exports = mongoose.model("Vote", VoteSchema);
