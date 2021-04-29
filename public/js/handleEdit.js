import handleEditSubmit from "./handleEditSubmit.js"

export default function handleEdit() {
    const guildMateId = this.dataset.id
    // Modal elements
    const modalForm = document.querySelector("#modal-form")
    const modal = document.querySelector("#modal");
    const modalName = document.querySelector("#modal-name")
    const modalStartingGP = document.querySelector("#modal-starting-gp")
    const modalTwDefense = document.querySelector("#modal-tw-defense")
    const modalTwOffense = document.querySelector("#modal-tw-offense")
    // Guild mates' info from table
    const guildMateInfo = document.querySelector(`[data-id="${guildMateId}"]`)
    const guildMate = {
        name: guildMateInfo.childNodes[0].textContent,
        staringGP: guildMateInfo.childNodes[0].textContent,
        twDefense: guildMateInfo.childNodes[2].textContent,
        twOffense: guildMateInfo.childNodes[3].textContent
    }
    // Add exixting info as placeholder
    modalName.setAttribute("value", guildMate.name)
    modalStartingGP.setAttribute("value", guildMate.staringGP)
    modalTwDefense.setAttribute("value", guildMate.twDefense)
    modalTwOffense.setAttribute("value", guildMate.twOffense)
    // Show modal
    modal.style.display = "block"

    modalForm.addEventListener("submit", handleEditSubmit)

}