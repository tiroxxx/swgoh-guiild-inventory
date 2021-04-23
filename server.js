const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", err => console.error(error))
db.once("open", () => console.log("connected to db"))

app.listen(3000, () => console.log("Server Started"))