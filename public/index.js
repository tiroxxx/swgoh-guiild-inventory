

const button = document.querySelector("#button")

button.addEventListener("click", getGuildMates)


function getGuildMates() {
    console.log("clicked");
    axios.get("http://localhost:3000/guildmates")
        .then(guildMates => {
            console.log(guildMates);
        })
        .catch(err => {
            console.error(err)
        })
}

