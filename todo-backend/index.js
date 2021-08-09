var express = require('express'), auth = require('./auth/auth.js'), task = require('./task/task.js')
var app = express()
express.json({})



app.use('/auth', auth)
app.use('/task', task)


app.listen(5000)