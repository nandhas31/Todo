var mongoose = require('mongoose')
const task_schema = new mongoose.Schema({
    text: 'string',
    completed: 'boolean',
    dueDate: 'date',
    createdDate: 'date',

  });

const Task = mongoose.model('Task', task_schema);

exports.Task = Task