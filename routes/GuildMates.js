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
router.get("/:id", getGuildmate, (req, res) => {
    res.send(res.guildmate)
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
        res.status(400).json({ message: err.message })
    }
})

// Updating a guild mate
router.patch("/:id", getGuildmate, async (req, res) => {
    if (req.body.name != null) {
        res.guildmate.name = req.body.name
    }
    if (req.body.startingGP != null) {
        res.guildmate.startingGP = req.body.startingGP
    }
    if (req.body.twDefense != null) {
        res.guildmate.twDefense = req.body.twDefense
    }
    if (req.body.twOffense != null) {
        res.guildmate.twOffense = req.body.twOffense
    }
    try {
        const updatedGuildmate = await res.guildmate.save()
        res.json(updatedGuildmate)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting a guild mate
router.delete("/:id", getGuildmate, async (req, res) => {
    try {
        await res.guildmate.remove()
        res.json({ message: "Deleted Guildmate" })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getGuildmate(req, res, next) {
    try {
        guildmate = await Guildmate.findById(req.params.id)
        if (guildmate == null) {
            return res.status(404).json({ message: "Cannot find Guildmate" })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.guildmate = guildmate
    next()
}


module.exports = router