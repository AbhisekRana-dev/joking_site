const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Check if the joke is a single or two-part joke
        if (data.type === "single") {
            jokeContainer.textContent = data.joke; // Single joke
        } else {
            jokeContainer.textContent = `${data.setup} - ${data.delivery}`; // Two-part joke
        }
    })
    .catch(error => {
        console.error("Error fetching joke:", error); // Handle errors
        jokeContainer.textContent = "Sorry, couldn't fetch a joke!";
    });
}

btn.addEventListener("click", getJoke); // Fetch a joke when button is clicked
