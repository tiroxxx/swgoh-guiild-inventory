
export default async function getGuildmates() {
    try {
        const response = await axios.get("http://localhost:3000/guildmates")
        const guildMates = response.data
        console.log(guildMates)
        guildMates.forEach(guildMate => {
            // Create table data
            const tableRow = document.createElement("tr")
            const name = document.createElement("td")
            const startingGP = document.createElement("td")
            const twDefense = document.createElement("td")
            const twOffense = document.createElement("td")
            // Update table text
            name.textContent = guildMate.name
            startingGP.textContent = guildMate.startingGP
            twDefense.textContent = guildMate.twDefense
            twOffense.textContent = guildMate.twOffense
            // Append table tada to table
            tableRow.append(name, startingGP, twDefense, twOffense)
            table.append(tableRow)
        })
    }
    catch (err) {
        console.error(err)
    }
}