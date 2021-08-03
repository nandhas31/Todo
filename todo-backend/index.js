var express = require('express'), auth = require('./auth/auth.js')
var app = express()
express.json({})



app.use('/auth', auth)


app.listen(5000)