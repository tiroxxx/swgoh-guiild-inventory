import displayGuildmates from "./displayGuildmates.js"

export default async function saveGuildmate(guildMate) {
    console.log("saved mates");
    try {
        const response = await axios.post("http://localhost:3000/guildmates", guildMate)
        const savedGuildmate = response.data
    }
    catch (err) {
        console.error(err)
    }
    

    
}