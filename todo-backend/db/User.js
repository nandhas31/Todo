var mongoose = require('mongoose')
const user_schema = new mongoose.Schema({
    email: 'string',
    password: 'string'
})

const User = mongoose.model('User', user_schema)

exports.User = User