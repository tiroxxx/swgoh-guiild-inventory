async function saveGuildmate(guildMate) {
    console.log("saved mates");
    try {
        const response = await axios.post("/api/guildmates", guildMate)
        const savedGuildmate = response.data
    }
    catch (err) {
        console.error(err)
    }
}