async function updateGuildmate(guildMate, id) {
    try {
        const response = await axios.patch("/api/guildmates/" + id, guildMate)
        const guildMates = response.data
        return guildMates
    }
    catch (err) {
        console.error(err)
    }
}