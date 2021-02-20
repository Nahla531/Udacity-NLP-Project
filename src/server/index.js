var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');
var bodyParser = require('body-parser');

const cors = require('cors');
// const PORT = process.env.PORT || 4000;
// Require the Aylien npm package
// const aylien = require("aylien_textapi");
const dotenv = require('dotenv');
const { data } = require('../client/index.js');
dotenv.config();
// api crediential 
// You could call it aylienapi, or anything else
console.log(`Your API key is ${process.env.API_KEY}`);

// const textapi = new aylien({
//     application_id: process.env.API_ID,
//     application_key: process.env.API_KEY
// });

const app = express()
app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


console.log(__dirname)

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen('8081', function() {
    console.log(`Example app listening on port 8081`)
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})
const fetch = require("node-fetch");
app.post('/data', function(req, res) {
    // console.log(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&of=json&url=${req.body.input}`)
    // fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&of=json&url=${req.body.input}`)
    //     .then(data => data.json())
    //     .then(res.send(data))

    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&of=json&url=${req.body.input}`, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then((data) => {
            res.send({
                score_tag: data.score_tag,
                agreement: data.agreement,
                subjectivity: data.subjectivity,
                confidence: data.confidence,
                irony: data.irony
            })


        })

})