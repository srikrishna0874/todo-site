const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const todo_model = require('./models/Todo.js');

async function getAllTasks() {
    try {
        const allTodos = await todo_model.find({});
        console.log('all todos are ', allTodos);
        return allTodos;
    }
    catch (e) {
        console.log(e);
        return {};
    }
}

app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/todo').then((res) => {
    console.log('mongodb connected successfully');
}).catch((err) => {
    console.log('error in connecting mongodb ', err);
});

app.listen(3000, () => {
    console.log('server is running');
});

app.get('/', async (req, res) => {
    res.render('index.ejs', { todoTasks: await getAllTasks() });
});

app.post('/add_task', async (req, res) => {
    console.log('body is: ');
    console.log(req.body);
    const task = req.body['Add Task'];
    console.log(task);
    const new_task_obj = new todo_model({ taskName: task });
    await new_task_obj.save();
    console.log('task inserted');
    res.redirect('/');
});


app.post('/edit_task/:id', async (req, res) => {

});

app.post('/delete_task/:id', async (req, res) => {
    try {
        const task = req.body['Edit Task'];
        await todo_model.findByIdAndUpdate(id, { task }, { new: true }).then((res) => {
            console.log('task edited');
            res.redirect('/');

        }).catch((err) => {
            console.log('cant update task');
        });

    }
    catch (e) {
        console.log(e);

    }
});

app.get('/get_tasks', async (req, res) => {
    const allTodos = getAllTasks();
    res.status(200).json(allTodos);

});



