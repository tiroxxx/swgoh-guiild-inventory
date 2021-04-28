import displayGuildmates from "./displayGuildmates.js"

export default async function getGuildmates() {
    try {
        const response = await axios.get("http://localhost:3000/guildmates")
        const guildMates = response.data

        guildMates.forEach(guildMate => {
            displayGuildmates(guildMate)
        })
    }
    catch (err) {
        console.error(err)
    }
}