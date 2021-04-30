const path = require("path")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const axios = require("axios")
require("dotenv").config()


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", err => console.error(error))
db.once("open", () => console.log("connected to db"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
//     next();
// });
app.use(express.static("public"))

const guildmatesRouter = require("./routes/Guildmates")
app.use("/api/guildmates", guildmatesRouter)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(3000, () => console.log("Server Started"))