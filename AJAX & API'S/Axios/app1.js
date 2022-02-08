//como header é um objeto, podemos passa-lo tanto como segundo argumento dentro do get como um objeto aplicado a uma variável. 

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');



const addNewJoke = async () => {
    const newLi = document.createElement('li');
    const jokeText = await getDadJoke();
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        // console.log(res.data.getDadJoke);
        return res.data.joke;
    } catch (e) {
        return "No Jokes Available"
    }

}

button.addEventListener('click', addNewJoke)