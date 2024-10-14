const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
});

const todo=mongoose.model('Todo', todoSchema);

module.exports=todo;