const mongoose = require("../config/connect_db.js");

const todoSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
});

const todo = mongoose.model('Todo', todoSchema);
console.log('todo model created');

module.exports = todo;