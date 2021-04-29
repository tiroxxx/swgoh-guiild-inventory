export default async function handleEditSubmit(e, guildMate) {
    e.preventDefault()

    console.log(guildMate)
    const modal = document.querySelector("#modal")
    modal.style.display = "none"
}