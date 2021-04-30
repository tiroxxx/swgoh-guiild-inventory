async function getGuildmates() {
    try {
        const response = await axios.get("/api/guildmates")
        const guildMates = response.data
        return guildMates
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = getGuildmates