'use strict'
const alexaHandlers = require('./alexa.js')

require('dotenv').config()
const app = require('express')()

app.post('/', function (req, res) {
  res.send(alexaHandlers)
})

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`)
})
