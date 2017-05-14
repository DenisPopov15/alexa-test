'use strict'
// const alexaHandlers = require('./alexa.js')

// require('dotenv').config()
// const app = require('express')()

// app.post('/', function (req, res) {
//   res.send(alexaHandlers.handler)
// })

// app.listen(process.env.PORT, function () {
//   console.log(`Example app listening on port ${process.env.PORT}!`)
// })

const Alexa = require('alexa-sdk')

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context)
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello')
    },
    'DenisHelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello World!')
    }
}
