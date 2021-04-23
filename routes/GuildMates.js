const express = require("express")
const router = express.Router()
const Guildmate = require("../models/guildmate")

// Getting all guild mates
router.get("/", async (req, res) => {
    try {
        const guildmates = await Guildmate.find()
        res.send(guildmates)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting specific guild mate
router.get("/:id", (req, res) => {
    
})

// Creating a guild mate
router.post("/", async (req, res) => {
    const guildmate = new Guildmate({
        name: req.body.name,
        startingGP: req.body.startingGP,
        twDefense: req.body.twDefense,
        twOffense: req.body.twOffense
    })

    try {
        const newGuildmate = await guildmate.save()
        res.status(201).json(newGuildmate)
    }
    catch (err) {
        res.status(400)
    }
})

// Updating a guild mate
router.patch("/:id", (req, res) => {
    
})

// Deleting a guild mate
router.delete("/:id", (req, res) => {
    
})


module.exports = router