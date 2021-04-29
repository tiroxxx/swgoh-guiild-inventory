import handleEdit from "./modal.js"

export default function displayGuildmates(guildMates) {
        const tr = document.querySelectorAll("table > tr")
        tr.forEach(ele => {
                ele.remove()
        })

        const table = document.querySelector("#table")
        guildMates.forEach(guildMate => {
                // Create table row with its elements
                const tableRow = document.createElement("tr")
                tableRow.setAttribute("data-id", guildMate._id)
                const name = document.createElement("td")
                const startingGP = document.createElement("td")
                const twDefense = document.createElement("td")
                const twOffense = document.createElement("td")
                const button = document.createElement("button")
                button.setAttribute("data-id", guildMate._id)
                // Update table text
                name.textContent = guildMate.name
                startingGP.textContent = guildMate.startingGP
                twDefense.textContent = guildMate.twDefense
                twOffense.textContent = guildMate.twOffense
                button.textContent = "Edit"
                // Append table tada to table
                tableRow.append(name, startingGP, twDefense, twOffense, button)
                table.append(tableRow)
                // Handle editting row
                button.addEventListener("click", handleEdit)
        })

}