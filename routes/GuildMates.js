const express = require("express")
const router = express.Router()
const GuildMate = require("../models/guildmate")

// Getting all guild mates
router.get("/", async (req, res) => {
    
})

// Getting specific guild mate
router.get("/:id", (req, res) => {
    
})

// Creating a guild mate
router.post("/", (req, res) => {
    
})

// Updating a guild mate
router.patch("/:id", (req, res) => {
    
})

// Deleting a guild mate
router.delete("/:id", (req, res) => {
    
})


module.exports = router