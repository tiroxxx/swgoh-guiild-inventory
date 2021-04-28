export default async function handleEditSubmit(e) {
    e.preventDefault()

    console.log("saved")
    const modal = document.querySelector("#modal")
    modal.style.display = "none"
}