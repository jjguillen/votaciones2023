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
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now,
    }
});

module.exports = mongoose.model("Vote", VoteSchema);
