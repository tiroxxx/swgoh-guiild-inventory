const mongoose = require("mongoose")

const guildmateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startingGP: {
        type: String,
        required: true
    },
    twDefense: {
        type: String,
        required: false
    },
    twOffense: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model("Guildmate", guildmateSchema)