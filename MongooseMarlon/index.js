const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connection open!');
    })
    .catch(err => {
        console.log('error!');
        console.log(err);
    })
// {
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: "R"
// }

//Para criar um schema com base no exemplo acima:

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

//Depois de criar o schema passamos ao mongoose que queremos usar esse schema como modelo:

const Movie = mongoose.model('Movie', movieSchema);

//Passamos um comando seguido de uma string que será o nome do modelo e dever ser uma palavra com letra maiúscula e seguido do schema.

//A partir disso podemos inserir dados dentro do nosso banco de dados. E salvar em uma nova variável se quiser.

// const amadeus = new Movie({
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: 'R'
// });

Movie.insertMany([

        {
            title: 'Amelie',
            year: 2001,
            score: 8.3,
            rating: 'R'
        },
        {
            title: 'Alien',
            year: 1979,
            score: 8.1,
            rating: 'R'
        },
        {
            title: 'The Iron Giant',
            year: 1999,
            score: 7.5,
            rating: 'PG'
        },
        {
            title: 'Stand By Me',
            year: 1986,
            score: 8.6,
            rating: 'R'
        },
        {
            title: 'Moonrise Kingdom',
            year: 2012,
            score: 7.3,
            rating: 'PG-13'
        }

    ])
    .then(data => {
        console.log('It worked!')
        console.log(data);
    })