const form = document.querySelector("#form")
form.addEventListener("submit", handleFormSubmit)

start()

async function start() {
    // Display guild mates
    const tr = document.querySelectorAll("table > tr")
    tr.forEach(ele => {
        ele.remove()
    })
    const guildMates = await getGuildmates()
    displayGuildmates(guildMates)

}

// MODAL
// Modal elements
const modalForm = document.querySelector("#modal-form")
const modal = document.querySelector("#modal");
const modalName = document.querySelector("#modal-name")
const modalStartingGP = document.querySelector("#modal-starting-gp")
const modalTwDefense = document.querySelector("#modal-tw-defense")
const modalTwOffense = document.querySelector("#modal-tw-offense")

modalForm.addEventListener("submit", async e => {
    e.preventDefault()
    const guildMateId = document.querySelector("#modal-form-submit").dataset.id
    const updatedGuildMate = {
        name: modalName.value,
        staringGP: modalStartingGP.value,
        twDefense: modalTwDefense.value,
        twOffense: modalTwOffense.value
    }
    
    modal.style.display = "none"

    const tr = document.querySelectorAll("table > tr")
    tr.forEach(ele => {
        ele.remove()
    })
    await updateGuildmate(updatedGuildMate, guildMateId)
    const guildMates = await getGuildmates()
    displayGuildmates(guildMates)
})

function handleEdit() {
    const guildMateId = this.dataset.id
    document.querySelector("#modal-form-submit").setAttribute("data-id", guildMateId)
    // Guild mates' info from table
    const guildMateInfo = document.querySelector(`[data-id="${guildMateId}"]`)
    const guildMate = {
        name: guildMateInfo.childNodes[0].textContent,
        staringGP: guildMateInfo.childNodes[1].textContent,
        twDefense: guildMateInfo.childNodes[2].textContent,
        twOffense: guildMateInfo.childNodes[3].textContent
    }
    console.log(guildMate);
    // Add exixting info as placeholder
    modalName.setAttribute("value", guildMate.name)
    modalStartingGP.setAttribute("value", guildMate.staringGP)
    modalTwDefense.setAttribute("value", guildMate.twDefense)
    modalTwOffense.setAttribute("value", guildMate.twOffense)
    // Show modal
    modal.style.display = "block"
}

function displayGuildmates(guildMates) {
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

async function handleFormSubmit(e) {
    e.preventDefault()

    const name = document.querySelector("#name").value
    const startingGP = document.querySelector("#starting-gp").value
    const twDefense = document.querySelector("#tw-defense").value
    const twOffense = document.querySelector("#tw-offense").value

    const guildMate = {
        name: name,
        startingGP: startingGP,
        twDefense: twDefense,
        twOffense: twOffense
    }

    await saveGuildmate(guildMate)
    const guildMates = await getGuildmates()
    displayGuildmates(guildMates)
}

// API calls
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












