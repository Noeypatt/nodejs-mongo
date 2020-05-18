const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send("Hello world 🌎")
})

app.listen(PORT, function () {
    console.log(`listening on ${PORT}`)
})
