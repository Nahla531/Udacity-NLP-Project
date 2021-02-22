var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const superagent = require('superagent')
const dotenv = require('dotenv');
const { url } = require('inspector')
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

//api vars
const apiKey = process.env.API_KEY
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?"
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


//api call

// superagent.get(url)