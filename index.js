const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const catsRouter = require('./routes/cats')


const PORT = process.env.PORT || 8000
const dbHost = process.env.DATABASE_HOST || "mongodb://localhost:27017/node_demo"
const dbName = process.env.DATABASE_NAME || "node_demo"


//Database
mongoose.connect(dbHost)
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', catsRouter)

app.listen(PORT, function () {
    console.log(`listening on ${PORT}`)
})