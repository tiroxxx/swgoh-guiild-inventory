export default async function updateGuildmate(guildMate, id) {
    console.log(guildMate, id);

    try {
        const response = await axios.patch("http://localhost:3000/guildmates/" + id, guildMate)
        const guildMates = response.data
        return guildMates
    }
    catch (err) {
        console.error(err)
    }

}