const express = require('express');
const app = express();

const port = process.env.PORT | 8080;

/*
Need basic CRUD for application:
    create an article
    get articles with category
    update articles 
    delete categories and articles
*/

app.get('/', (req, res) => {
    res.sendFile(__dirname)
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})