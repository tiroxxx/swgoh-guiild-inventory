const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", err => console.error(error))
db.once("open", () => console.log("connected to db"))

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const guildMatesRouter = require("./routes/GuildMates")
app.use("/guildmates", guildMatesRouter)


app.listen(3000, () => console.log("Server Started"))