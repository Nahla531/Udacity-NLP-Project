var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

<<<<<<< HEAD
=======
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
>>>>>>> 67237c87e611ab0c921ef088b45e57676e389219
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
<<<<<<< HEAD
=======
const fetch = require("node-fetch");
app.post('/data', function(req, res) {
    // console.log(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&of=json&url=${req.body.input}`)
    // fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&of=json&url=${req.body.input}`)
    //     .then(data => data.json())
    //     .then(res.send(data))
    console.log(req.body)
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&of=json&url=${req.body.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            res.send({
                score_tag: data.score_tag,
                agreement: data.agreement,
                subjectivity: data.subjectivity,
                confidence: data.confidence,
                irony: data.irony
            })


        });

})

// app.post('/data', function(req, res) {
//     const data = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&of=json&url=${req.body.url}`);
//     try {
//         // Transform into JSON
//         const MeaningData = await data.json();
//         response.send(MeaningData)
//     } catch (error) {
//         console.log("error", error);
//         // appropriately handle the error
//     }
// })
>>>>>>> 67237c87e611ab0c921ef088b45e57676e389219
