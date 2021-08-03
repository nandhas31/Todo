const mongoose = require('mongoose');
const task_schema = require('./model')
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log("Hello")
);

const Task = mongoose.model('Task', task_schema);

exports.Task= Task;