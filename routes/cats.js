const express = require('express')
const router = express.Router()
import { create } from '../controllers/cats'

router.get('/', function (req, res) {
    res.send("Hello world 🌎")
})


module.exports = router