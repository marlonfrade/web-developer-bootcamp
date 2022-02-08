const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('');
//     console.dir(req);
//     res.send('response')
// })


app.get('/', (req, res) => {
    res.send('home page');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`);
})


app.get('/r/:subreddit/:Postid', (req, res) => {
    const { subreddit, Postid } = req.params;
    res.send(`<h1>Viewing Post ID: ${Postid} on the ${subreddit} subreddit </h1>`);
})


app.get('/cats', (req, res) => {
    console.log('cat response');
    res.send('meow');
})

app.post('/cats', (req, res) => {
    res.send('post request')
})

app.get('dogs', (req, res) => {
    res.send('roof');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('nothing found!')
    }
    res.send(`<h1> Search Results for :${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send(`I don't know that path`);
})

app.listen(8080, () => {
    console.log('');
})

