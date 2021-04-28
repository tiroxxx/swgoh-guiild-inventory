import saveGuildmates from "./saveGuildmates.js"

export default function handleFormSubmit(e) {
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

    saveGuildmates(guildMate)
}