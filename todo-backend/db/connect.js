const mongoose = require('mongoose');
const user = require('./User')
const task = require('./Task')



mongoose.connect('mongodb://mongoadmin:secret@localhost:27888/test?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log("Hello")
);

exports.Task = task.Task;
exports.user = user.User;