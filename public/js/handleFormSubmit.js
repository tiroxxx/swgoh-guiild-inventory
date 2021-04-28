export default function handleFormSubmit(e) {
    e.preventDefault()

    const name = document.querySelector("#name").value
    const startingGP = document.querySelector("#starting-gp").value
    const twDefense = document.querySelector("#tw-defense").value
    const twOffense = document.querySelector("#tw-offense").value

    console.log(`${name} ${startingGP} ${twDefense} ${twOffense}`);
}