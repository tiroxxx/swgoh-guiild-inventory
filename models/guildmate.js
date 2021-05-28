const mongoose = require("mongoose")

const guildmateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startingGP: {
        type: Number,
        required: true
    },
    twDefense: {
        type: Number,
        required: false
    },
    twOffense: {
        type: Number,
        required: false
    },
})

module.exports = mongoose.model("Guildmate", guildmateSchema)