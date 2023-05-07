const mongoose = require("mongoose");

//Esquema de la colleción en Mongo
const Schema = mongoose.Schema;

const VoteSchema = Schema({
    ID: {
        type: Number,
        require: true
    },
    NOMBRE: {
        type: String,
        require: true
    },
    APE1: {
        type: String,
        require: false
    },
    APE2: {
        type: String,
        require: false
    },
    DOMI1: {
        type: String,
        require: false
    },
    CPRON: {
        type: String,
        require: false
    },
    CNMUN: {
        type: String,
        require: false
    },
    FNAC: {
        type: String,
        require: false
    },
    IDENT: {
        type: String,
        require: false
    },
    MESA: {
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
