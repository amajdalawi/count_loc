const express = require('express');
const url = require('url')
const {createWriteStream } = require('fs');
const app = express();

app.get('/api/:link', async function (req, res, next) {
    let urlLink = req.params.link;
    let formattedUrl = url.parse(urlLink);
    console.log(formattedUrl);
    return res.json(formattedUrl)
} );

app.listen(process.env.PORT || 3000, function () {
    console.log('started to listen...')
});