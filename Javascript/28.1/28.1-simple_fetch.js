document.querySelector('button').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://api.jokes.one/jod')
    .then((result) => {
       return result.json()
    })
    .then((data) => {
        document.querySelector('h2').innerText = data.contents.jokes[0].joke.title;
        document.querySelector('h3').innerText = data.contents.jokes[0].joke.text;
    })
    .catch((error) => {
        console.log(error)
    })
}
