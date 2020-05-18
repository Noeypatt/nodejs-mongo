const express = require('express')
const router = express.Router()
const { create, read, update, remove } = require('../controllers/cats')

router
    .get('/', function (req, res) {
        res.send("Hello world 🌎")
    })
    .get('/cats', read)
    .post('/create-cat', create)
    .put('/update-cat/:name', update)
    .delete('/remove-cat/:name', remove)

module.exports = router