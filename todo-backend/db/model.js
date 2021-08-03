var mongoose = require('mongoose')
const task_schema = new mongoose.Schema({
    text: String,
    completed: Boolean,
    due_date: Date,
    created_date: Date,

  });

  exports.default = task_schema;