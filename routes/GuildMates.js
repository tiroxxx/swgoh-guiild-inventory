const express = require("express")
const router = express.Router()

// Getting all guild mates
router.get("/", (req, res) => {
    console.log("clicked");
    res.send("no you")
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