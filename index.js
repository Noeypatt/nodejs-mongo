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
mongoose
    .connect(dbHost,
        (err, client) => {
            if (err) return console.log(err)

            console.log(`Connected MongoDB: ${dbHost}`)
            console.log(`Database: ${dbName}`)
        })



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', catsRouter)

app.listen(PORT, function () {
    console.log(`listening on ${PORT}`)
})