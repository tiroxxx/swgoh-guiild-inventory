export default async function saveGuildmates(guildMate) {
    console.log("saved mates");
    try {
        const response = await axios.post("http://localhost:3000/guildmates", guildMate)

        
    }
    catch (err) {
        console.error(err)
    }
    

    
}