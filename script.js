console.log("Welcome to the Lobster Club Improv Comedy Show!");
const randomBtn = document.getElementById('random-btn');
const hipsterBtn = document.getElementById('hipster-btn');
const historyBtn = document.getElementById('history-btn');
const beesBtn = document.getElementById('bees-btn');


const joke = document.getElementById('joke')
const options = { 
    method: 'GET', // specify this is a GET request, not a PUT or POST
    headers: {
      "Accept" : "application/json" // request the response in JSON format
    }
  }

randomBtn.addEventListener("click", () => getJoke());
hipsterBtn.addEventListener("click", () => getJoke('hipster'));
historyBtn.addEventListener("click", () => getJoke('history'));
beesBtn.addEventListener("click", () => getJoke('bees'));

const getJoke = (category) => {
    const url = category ? 
    `https://icanhazdadjoke.com/search?term=${category}` :
    'https://icanhazdadjoke.com/'
    fetch(url, options)
	.then(response => {
		return response.json()
	})
	.then(responseAsJson => {
		joke.innerHTML = category ? 
        responseAsJson.results[0].joke :
        responseAsJson.joke
	})
	.catch(error => {
		console.error(error)
	})
}