const express = require('express')
const router = express.Router()
const { create } = require('../controllers/cats')

router
    .get('/', function (req, res) {
        res.send("Hello world 🌎")
    })
    .post('/create-cat', create)


module.exports = router